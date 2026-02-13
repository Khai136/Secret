const btn = document.getElementById('surpriseBtn');
const message = document.getElementById('message');
const bgMusic = document.getElementById('bgMusic');

btn.addEventListener('click', () => {
    message.textContent = "Aku kangen kamu 😘 Semoga hari Valentine kita selalu manis seperti ini!";
    bgMusic.play();
});

// buat hati random floating
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.animationDuration = 2 + Math.random() * 3 + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

// bikin hati terus-terusan
setInterval(createHeart, 300);
