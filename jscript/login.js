// get login form data
const loginForm = document.querySelector('[data-js="login-form"]');

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const loginUserName = event.target.elements.username.value;
  const loginPassword = event.target.elements.password.value;
  console.log(loginUserName, loginPassword);

  // event.target.reset();
  // event.target.username.focus();
});

// create new account toggle

const switchButton = document.querySelector('[data-js="switch"]');

switchButton.addEventListener("click", () => {
  const loginSection = document.querySelector('[data-js="login-section"]');
  const createAccountSection = document.querySelector(
    '[data-js="create-account-section"]'
  );
  if (loginSection.style.top === "-500px") {
    loginSection.style.top = "70px";
    createAccountSection.style.top = "-500px";
  } else {
    loginSection.style.top = "-500px";
    createAccountSection.style.top = "70px";
  }
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
