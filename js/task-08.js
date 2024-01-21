const loginFormElement = document.querySelector(".login-form");
loginFormElement.addEventListener("submit", handleLoginSubmit);

function handleLoginSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    alert("Please fill in all the fields!");
    return;
  }

  const loginData = {
    email: email,
    password: password,
  };

  console.log(loginData);

  form.reset();
}
