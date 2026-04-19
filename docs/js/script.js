const weddingDate = new Date("2026-06-29T19:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  let distance = weddingDate - now;

  // If time is up → lock at 0
  if (distance <= 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "0s0";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return; // stop here, no negatives
  }

  // Calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update DOM
  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2,"0",);
  document.getElementById("seconds").textContent = String(seconds).padStart(2,"0",);
}

updateCountdown();
setInterval(updateCountdown, 1000);

function openInvite() {
  const intro = document.getElementById("intro");
  const content = document.getElementById("content");

  // gentle delay before reveal starts
  setTimeout(() => {
    intro.classList.add("split");
  }, 2000);

  setTimeout(() => {
    intro.style.opacity = "0";
    intro.style.transition = "opacity 1.8s ease";

    intro.classList.add("hide");
    content.classList.add("show");
  }, 3200);

  setTimeout(() => {
    runFireworks(5);
  }, 3400);
}

window.onload = function () {
  openInvite();
};
