import './style.css';
import winSfx from './assets/win.mp3';

const emojis = ["🍒", "🍋", "🍉", "⭐", "🍇", "💎"];

const slot1 = document.getElementById("slot1");
const slot2 = document.getElementById("slot2");
const slot3 = document.getElementById("slot3");
const button = document.getElementById("spinButton");
const result = document.getElementById("result");

// sonido
const winSound = new Audio(winSfx);

// función para animación tipo ruleta
function spinSlot(slotElement, duration) {
  return new Promise((resolve) => {
    let interval = setInterval(() => {
      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
      slotElement.textContent = randomEmoji;
    }, 80); // velocidad del giro

    setTimeout(() => {
      clearInterval(interval);

      // emoji final
      const finalEmoji = emojis[Math.floor(Math.random() * emojis.length)];
      slotElement.textContent = finalEmoji;
      resolve(finalEmoji);

    }, duration);
  });
}

button.addEventListener("click", async () => {
  result.textContent = "";
  button.disabled = true;

  // tiempos distintos para que cada ruleta se pare escalonadamente
  const r1 = await spinSlot(slot1, 600);
  const r2 = await spinSlot(slot2, 800);
  const r3 = await spinSlot(slot3, 1000);

  // verificar victoria
  if (r1 === r2 && r2 === r3) {
    result.textContent = "🎉 ¡GANASTE!";
    result.style.color = "#00ff7f";

    winSound.currentTime = 0;
    winSound.play();
  } else {
    result.textContent = "❌ Intentar de nuevo";
    result.style.color = "#ff4d4d";
  }

  button.disabled = false;
});
