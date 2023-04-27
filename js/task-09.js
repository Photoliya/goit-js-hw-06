function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.body
const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color')

function bgChangeColor(event) {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanEl.textContent = color;
}

buttonEl.addEventListener('click', bgChangeColor)