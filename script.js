let index = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

// Suivant
document.querySelector('.next').onclick = () => {
    index = (index + 1) % totalSlides;
    slides.style.transform = `translateX(-${index * 100}%)`;
};

// Précédent
document.querySelector('.prev').onclick = () => {
    index = (index - 1 + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${index * 100}%)`;
};

// Auto slider toutes les 4s
setInterval(() => {
    index = (index + 1) % totalSlides;
    slides.style.transform = `translateX(-${index * 100}%)`;
}, 4000);
