
const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

function onInputChange(event) {
  if (input.value !== "") {
    span.textContent = event.currentTarget.value;
  } else {
    span.textContent = "Anonymous";
  }
}
 
input.addEventListener('input', onInputChange);

