// get login form data
const loginForm = document.querySelector('[data-js="login-form"]');

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const loginUserName = event.target.elements.username.value;
  const loginPassword = event.target.elements.password.value;
  console.log(loginUserName, loginPassword);

  event.target.reset();
  event.target.username.focus();
});

// get create new account form data
const createAccountForm = document.querySelector(
  '[data-js="create-account-form"]'
);

createAccountForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newformData = new FormData(event.target);
  const data = Object.fromEntries(newformData);
  console.log(data);

  event.target.reset();
  event.target.email.focus();
});

// reset password notification
const resetPasswordButton = document.querySelector(
  '[data-js="reset-password-button"]'
);
const emailSentNotify = document.querySelector('[data-js="reset-notify"]');
resetPasswordButton.addEventListener("click", () => {
  emailSentNotify.style.display = "block";
  // alert("We sent you an email to reset your password.");
});
