// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

const tikers = document.querySelectorAll(".tiker");

if (tikers.length > 0) {
  tikers.forEach((tiker) => {
    const originalLine = tiker.querySelector(".tiker__list");
    const speed = tiker.getAttribute("data-tiker-speed") || 40; // Значение по умолчанию - 40 секунд
  
    if (originalLine) {
      // Применяем нужную анимацию и скорость
      if (tiker.classList.contains("tiker-01")) {
        originalLine.style.animation = `scroll ${speed}s linear infinite`;
      }
      if (tiker.classList.contains("tiker-02")) {
        originalLine.style.animation = `scroll-rev ${speed}s linear infinite`;
      }
  
      const clonedLine = originalLine.cloneNode(true);
      clonedLine.classList.add("clone-line");
      
      tiker.appendChild(clonedLine);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
const items = document.querySelectorAll('.price__item');
const countServicesElement = document.querySelector('.count-services');
if (items.length > 0) {
  if (countServicesElement) {
    countServicesElement.textContent = items.length;
  }
}


const closeButtons = document.querySelectorAll('.success__close');

if (closeButtons.length) {
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const form = button.closest('form');
      if (form && form.classList.contains('_sent-success')) {
        form.classList.remove('_sent-success');
      }
    });
  });
}
});
