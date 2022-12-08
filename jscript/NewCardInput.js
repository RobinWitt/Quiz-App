// input from new question entry

import { questionAPI } from "./db.js";

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
  //event.target.reset();
});
