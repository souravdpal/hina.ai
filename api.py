import requests

# Hugging Face API URL (GPT-2 or any other model)
API_URL = "https://api-inference.huggingface.co/models/gpt2"

# Fix: Use a proper dictionary for headers
HEADERS = {
    "Authorization": "Bearer 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"
}

def ask_hina(question):
    """Send a prompt to Hugging Face API and get a response."""
    response = requests.post(API_URL, headers=HEADERS, json={"inputs": question})

    if response.status_code == 200:
        data = response.json()
        return data[0]["generated_text"]  # Extract response text
    else:
        return f"Error: {response.status_code}, {response.text}"  # Debugging info

# Chat loop
print("🟢 HINA is ready! Type 'exit' to stop.\n")
while True:
    user_prompt = input("You: ")  # Get user input
    if user_prompt.lower() == "exit":
        print("HINA: Goodbye! 👋")
        break  # Exit loop
    ai_response = ask_hina(user_prompt)  # Get AI response
    print("HINA:", ai_response)  # Print response
