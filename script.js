// Get elements once
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {
  const now = new Date();
  let year = now.getFullYear();
  let valentine = new Date(year, 1, 14);

  if (now > valentine) {
    valentine = new Date(year + 1, 1, 14);
  }

  const diff = valentine - now;

  daysEl.textContent = Math.floor(diff / (1000 * 60 * 60 * 24));
  hoursEl.textContent = Math.floor((diff / (1000 * 60 * 60)) % 24);
  minutesEl.textContent = Math.floor((diff / (1000 * 60)) % 60);
  secondsEl.textContent = Math.floor((diff / 1000) % 60);
}

// Run immediately and every second
updateCountdown();
setInterval(updateCountdown, 1000);

function yesResponse() {
  const result = document.getElementById("result");
  result.classList.remove("hidden");
  result.textContent = "Yay! 💜 You just made me the happiest person 😍";

  const phone = "27817381404"; 
  const message = encodeURIComponent("She said YES! 💜");
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}

function ofCourseResponse() {
  const result = document.getElementById("result");
  result.classList.remove("hidden");
  result.textContent = "Wow! 😍 I can’t stop smiling 💜";

  const phone = "27817381404"; 
  const message = encodeURIComponent("She said OF COURSE! 😍💜");
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}

function maybeResponse() {
  const result = document.getElementById("result");
  result.classList.remove("hidden");
  result.textContent = "Take your time… I’ll be right here 💜";

  const phone = "27817381404"; 
  const message = encodeURIComponent("She said maybe… 💜");
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}