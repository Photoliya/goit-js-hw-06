
const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');


function onInputChange(event) {
   span.textContent = event.currentTarget.value;
}

function onInputBlur(event) {
   input.value = ""
   span.textContent = "Anonymous";
}


input.addEventListener('input', onInputChange);
input.addEventListener('blur', onInputBlur);

