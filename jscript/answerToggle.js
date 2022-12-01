// show answers

const showAnswer = document.querySelectorAll(
  '[data-js="question-card__answer"]'
);

document
  .querySelectorAll('[data-js="question-card__button-show-answer"]')
  .forEach((button, index) => {
    button.onclick = (event) => {
      if (showAnswer.item(index).style.display === "none") {
        showAnswer.item(index).style.display = "block";
      } else {
        showAnswer.item(index).style.display = "none";
      }
    };
  });
