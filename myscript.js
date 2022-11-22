/*
const toggleButton = document.querySelector('input[data-js="DarkModeButton"]');
const root = document.documentElement;

toggleButton.addEventListener("click", () => {
  root.classList.toggle("dark");
});
*/

/*  .classlist.remove  removes a class from html element
    .classlist.add adds a class
    .classlist.toggle toggles a class 

*/

const bookmarkButton = document.querySelector(
  'button[data-js="bookmarkButton"]'
);
const svgPath = document.querySelector('path[data-js="svgPath"]');

bookmarkButton.addEventListener("click", () => {
  svgPath.setAttribute(
    "d",
    "M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z"
  );
});
