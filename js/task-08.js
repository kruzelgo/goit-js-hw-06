const loginFormElement = document.querySelector(".login-form");
loginFormElement.addEventListener("submit", handleLoginSubmit);

function handleLoginSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Email: ${email}, Password: ${password}`);
  form.reset();
}
