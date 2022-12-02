// create new account with email toggle

const createAccountButton = document.querySelector(
  '[data-js="create-account-button"]'
);
const createAccountEmail = document.querySelector(
  '[data-js="create-account-email"]'
);

createAccountButton.addEventListener("click", () => {
  const emailInput = document.querySelectorAll(
    '[data-js="create-account-email"]'
  );
  if (createAccountEmail.style.display === "flex") {
    emailInput.forEach((element) => {
      element.style.display = "none";
    });
  } else {
    emailInput.forEach((element) => {
      element.style.display = "flex";
    });
  }
});

// reset password notification

const resetPasswordButton = document.querySelector(
  '[data-js="reset-password-button"]'
);
const emailSentNotify = document.querySelector('[data-js="reset-notify"]');
resetPasswordButton.addEventListener("click", () => {
  emailSentNotify.style.display = "block";
  alert("We sent you an email to reset your password.");
});
