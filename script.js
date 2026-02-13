const btn = document.getElementById('surpriseBtn');
const card = document.querySelector('.card');
const bgMusic = document.getElementById('bgMusic');

btn.addEventListener('click', () => {
    card.classList.add('active');
    btn.disabled = true;
    bgMusic.play();
    showMessage();
    startHearts();
    startConfetti();
});

function showMessage() {
    card.innerHTML = `
        <h1>Happy Valentine ❤️</h1>
        <p>Aku kangen kamu 😘 Semoga hari Valentine kita selalu manis!</p>
    `;
}

// bikin hati floating
function startHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.backgroundColor = getRandomColor();
        heart.style.animationDuration = 2 + Math.random() * 3 + 's';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }, 300);
}

// bikin confetti
function startConfetti() {
    setInterval(() => {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.animationDuration = 2 + Math.random() * 3 + 's';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }, 150);
}

// helper warna random
function getRandomColor() {
    const colors = ['#FF4D6D','#FF9A9E','#FFD700','#FF69B4','#FFB6C1'];
    return colors[Math.floor(Math.random() * colors.length)];
}
