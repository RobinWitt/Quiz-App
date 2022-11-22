/* toggle dark mode */

const toggleButton = document.querySelector('input[data-js="darkModeSwitch"]');
const root = document.documentElement;

toggleButton.addEventListener("click", () => {
  root.classList.toggle("dark");
});
