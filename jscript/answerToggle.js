// toggle answers

const showAnswer = document.querySelectorAll(
  '[data-js="question-card__answer"]'
);

document
  .querySelectorAll('[data-js="question-card__button-show-answer"]')
  .forEach((button, index) => {
    button.onclick = (event) => {
      showAnswer.item(index).classList.toggle("showAnswer");
    };
  });
