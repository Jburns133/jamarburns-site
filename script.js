document.getElementById("enterBtn").addEventListener("click", () => {
  const btn = document.getElementById("enterBtn");

  btn.classList.add("pressed");

  setTimeout(() => {
    document.getElementById("screen1").classList.add("hidden");
    document.getElementById("screen2").classList.remove("hidden");

    typeTerminalText("Searching for Jamar...\nOne moment.");
  }, 400);
});

function typeTerminalText(text) {
  const container = document.querySelector(".crt");
  container.innerHTML = "";
  let i = 0;

  const typingInterval = setInterval(() => {
    if (i < text.length) {
      container.innerHTML += text[i] === "\n" ? "<br/>" : text[i];
      i++;
    } else {
      clearInterval(typingInterval);
    }
  }, 75);
}