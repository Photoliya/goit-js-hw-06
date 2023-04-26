
const inputFontSize = document.querySelector('#font-size-control');

const spanEl = document.querySelector('#text');

function fontSizeChange(event) {
  text.style.fontSize = `${event.target.value}px`;
}

inputFontSize.addEventListener('input', fontSizeChange)