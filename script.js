function goToYes() {
  window.location.href = "plan.html";
}

function noResponse() {
  alert("Aww 😢 Maybe next level, Dame?");
}

const form = document.getElementById("planForm");
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    window.location.href = "thankyou.html";
  });
}

/* Floating hearts animation generator */
const heartsContainer = document.getElementById('hearts');
if (heartsContainer) {
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 400);
}
