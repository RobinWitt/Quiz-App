// input from new question entry

import { questionAPI } from "./db.js";
import { displayCharactersLeft } from "./characterCount.js";
const [a, b, c] = displayCharactersLeft;

const createNewCardForm = document.querySelector('[data-js="new-card__form"]');

createNewCardForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // get form data
  const newQuestionData = new FormData(event.target);
  const newQuestionEntry = Object.fromEntries(newQuestionData);
  const question = newQuestionEntry.newQuestion;
  const answer = newQuestionEntry.newAnswer;
  const category = newQuestionEntry.newCategory;
  questionAPI.unshift(newQuestionEntry);
  console.log(questionAPI);
  a.textContent = "";
  b.textContent = "";
  c.textContent = "";
  event.target.reset();
  event.target.newQuestion.focus();
});

// reset character counters on "reset"

createNewCardForm.addEventListener("reset", (event) => {
  a.textContent = "";
  b.textContent = "";
  c.textContent = "";
  event.target.reset();
  event.target.newQuestion.focus();
});
