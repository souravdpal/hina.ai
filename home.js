document.addEventListener("DOMContentLoaded", function () {
    console.log("Script Loaded ✅");

    // Chat Elements
    let sendButton = document.getElementById("sendBtn");
    let inputField = document.getElementById("chatInput");
    let chatContainer = document.getElementById("chatMessages");

    if (!sendButton || !inputField || !chatContainer) {
        console.error("Error: Some elements are missing in the HTML!");
        return;
    }

    // Event Listeners for sending message
    sendButton.addEventListener("click", sendMessage);
    inputField.addEventListener("keypress", function (event) {
        if (event.key === "Enter" && !event.shiftKey) { // Enter key without Shift
            event.preventDefault();
            sendMessage();
        }
    });

    async function sendMessage() {
        let userInput = inputField.value.trim();
        if (userInput === "") return;

        inputField.value = ""; // Clear input field

        // Append User Message
        let userMessageDiv = document.createElement("div");
        userMessageDiv.classList.add("user-msg");
        userMessageDiv.innerText = "You: " + userInput;
        chatContainer.appendChild(userMessageDiv);

        // Clear chat if command is "/clear"
        if (userInput.toLowerCase() === "/clear") {
            chatContainer.innerHTML = "";
            return;
        }

        // Append Loading Indicator
        let loadingDiv = document.createElement("div");
        loadingDiv.classList.add("loading-msg");
        loadingDiv.innerText = "HINA is typing...";
        chatContainer.appendChild(loadingDiv);

        try {
            let response = await fetch("https://api-inference.huggingface.co/models/gpt2", {
                method: "POST",
                headers: {
                    "Authorization": "Bearer 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",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ inputs: userInput })
            });

            let data = await response.json();
            let aiResponse = data[0]?.generated_text || "Error: No response from AI.";

            // Remove Loading Indicator
            chatContainer.removeChild(loadingDiv);

            // Append AI Response
            let aiMessageDiv = document.createElement("div");
            aiMessageDiv.classList.add("ai-msg");
            aiMessageDiv.innerText = "HINA: " + aiResponse;
            chatContainer.appendChild(aiMessageDiv);
        } catch (error) {
            chatContainer.removeChild(loadingDiv);
            let errorDiv = document.createElement("div");
            errorDiv.classList.add("ai-msg");
            errorDiv.innerText = "Error: API request failed.";
            chatContainer.appendChild(errorDiv);
        }

        // Auto-scroll to the latest message smoothly
        chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: "smooth" });
    }
});
