const emojis = ["🍒", "🍋", "🍉"];

const slot1 = document.getElementById("slot1");
const slot2 = document.getElementById("slot2");
const slot3 = document.getElementById("slot3");
const button = document.getElementById("spinButton");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  // Animación breve
  result.textContent = "";
  button.disabled = true;

  slot1.textContent = "🎲";
  slot2.textContent = "🎲";
  slot3.textContent = "🎲";

  setTimeout(() => {
    const r1 = emojis[Math.floor(Math.random() * emojis.length)];
    const r2 = emojis[Math.floor(Math.random() * emojis.length)];
    const r3 = emojis[Math.floor(Math.random() * emojis.length)];

    slot1.textContent = r1;
    slot2.textContent = r2;
    slot3.textContent = r3;

    if (r1 === r2 && r2 === r3) {
      result.textContent = "🎉 ¡GANASTE!";
      result.style.color = "#00ff7f";
    } else {
      result.textContent = "❌ Intentar de nuevo";
      result.style.color = "#ff4d4d";
    }

    button.disabled = false;

  }, 600);
});
