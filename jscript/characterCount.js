// count characters left in input field

const textInput = document.querySelectorAll('[data-js="text-input"]');
const displayCharactersLeft = document.querySelectorAll(
  '[ data-js="characters-left"]'
);

document
  .querySelectorAll('[data-js="text-input"]')
  .forEach((textarea, index) => {
    textarea.oninput = (event) => {
      displayCharactersLeft.item(index).textContent =
        "Characters left: " +
        (textInput.item(index).getAttribute("maxlength") -
          textInput.item(index).value.length);
    };
  });
