document.getElementById("check-specs").addEventListener("click", function() {
    document.getElementById("specs-guide").classList.toggle("hidden");
});

document.getElementById("windows-btn").addEventListener("click", function() {
    document.getElementById("guide").classList.remove("hidden");
    document.getElementById("install-commands").textContent = `
1️⃣ Install Ollama:
   Open PowerShell as Administrator and run:
   iwr https://ollama.ai/install.ps1 -useb | iex

2️⃣ Choose & Install a Model:
   - For 7B (lightweight) → ollama pull deepseek:7b
   - For 13B (balanced) → ollama pull deepseek:13b
   - For 30B (heavy) → ollama pull deepseek:30b
   - For 65B (extreme) → ollama pull deepseek:65b

3️⃣ Run the AI:
   ollama run deepseek:[chosen_model]
`;
});

document.getElementById("linux-btn").addEventListener("click", function() {
    document.getElementById("guide").classList.remove("hidden");
    document.getElementById("install-commands").textContent = `
1️⃣ Install Ollama:
   curl -fsSL https://ollama.ai/install.sh | sh

2️⃣ Choose & Install a Model:
   - For 7B (lightweight) → ollama pull deepseek:7b
   - For 13B (balanced) → ollama pull deepseek:13b
   - For 30B (heavy) → ollama pull deepseek:30b
   - For 65B (extreme) → ollama pull deepseek:65b

3️⃣ Run the AI:
   ollama run deepseek:[chosen_model]
`;
});
