
const inputEl = document.querySelector('#validation-input');

function onInputBlur(event) {
    if (event.target.value.length !== Number(event.currentTarget.dataset.length)) {
    event.currentTarget.classList.add('invalid');
    event.currentTarget.classList.remove('valid');
    return;
  }
  event.target.classList.add('valid');
  event.target.classList.remove('invalid');
}


inputEl.addEventListener('blur', onInputBlur);