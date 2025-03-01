const btns = document.querySelectorAll(".btn");
const slideRow = document.getElementById("slide-row");
const main = document.querySelector("main");

let currentIndex = 0;

const totalSlides = 6; // Total de slides

function updateSlide() {
  const mainWidth = main.offsetWidth;
  const translateValue = currentIndex * -mainWidth;

  if (currentIndex >= totalSlides) {
    currentIndex = 0; // Volta para o início
  } else if (currentIndex < 0) {
    currentIndex = totalSlides - 1; // Volta para o último slide
  }

  slideRow.style.transform = `translateX(${translateValue}px)`;

  btns.forEach((btn, index) => {
    btn.classList.toggle("active", index === currentIndex);
  });
}

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    currentIndex = index;
    updateSlide();
  });
});

window.addEventListener("resize", () => {
  updateSlide();
});
