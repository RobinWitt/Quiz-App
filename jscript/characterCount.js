// count characters left in input field

const textInput = document.querySelectorAll('[data-js="text-input"]');
export const displayCharactersLeft = document.querySelectorAll(
  '[ data-js="characters-left"]'
);

textInput.forEach((textarea, index) => {
  textarea.oninput = (event) => {
    if (textInput.item(index).value.length > 0) {
      displayCharactersLeft.item(index).textContent =
        "Characters left: " +
        (textInput.item(index).getAttribute("maxlength") -
          textInput.item(index).value.length);
    } else {
      displayCharactersLeft.item(index).textContent = "";
    }
  };
});
