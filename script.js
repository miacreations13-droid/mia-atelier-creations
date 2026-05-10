let index = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function createDots() {
    const dotsContainer = document.getElementById('dots');
    if (!dotsContainer) return;
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot' + (i === 0 ? ' active' : '');
        dot.onclick = () => goToSlide(i);
        dotsContainer.appendChild(dot);
    }
}

function updateDots() {
    document.querySelectorAll('.dot').forEach((d, i) => {
        d.classList.toggle('active', i === index);
    });
}

function goToSlide(n) {
    index = n;
    slides.style.transform = `translateX(-${index * 100}%)`;
    updateDots();
}

function moveSlide(dir) {
    index = (index + dir + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${index * 100}%)`;
    updateDots();
}

function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('open');
}

setInterval(() => moveSlide(1), 4000);
createDots();
