
const form = document.querySelector(".login-form");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Увага! Всі поля мають бути заповнені");
    return;
  }

  const object = {
    email: email.value,
    password: password.value,
  };

  console.log(object);

  event.currentTarget.reset();
});