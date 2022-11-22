const toggleButton = document.querySelector('input[data-js="DarkModeButton"]');
const root = document.documentElement;

toggleButton.addEventListener("click", () => {
  root.classList.toggle("dark");
});

/*  .classlist.remove  removes a class from html element
    .classlist.add adds a class
    .classlist.toggle toggles a class 

*/
