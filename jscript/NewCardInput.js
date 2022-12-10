// input from new question entry

import { displayCharactersLeft } from "./characterCount.js";
import { CreateCard } from "./CreateCard.js";
const [a, b, c] = displayCharactersLeft;

const createNewCardForm = document.querySelector('[data-js="new-card__form"]');
const pageCreateNewCard = document.querySelector('[data-js="page-add-new"]');

createNewCardForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // get form data
  const newQuestionData = new FormData(event.target);
  const newQuestionEntry = Object.fromEntries(newQuestionData);
  const questionTitle = newQuestionEntry.newQuestion;
  const answer = newQuestionEntry.newAnswer;
  const category = [newQuestionEntry.newCategory];
  console.log(category);
  a.textContent = "";
  b.textContent = "";
  c.textContent = "";
  //event.target.reset();
  //event.target.newQuestion.focus();
  CreateCard(100, questionTitle, category, answer, true, pageCreateNewCard);
});

// reset character counters on "reset"

createNewCardForm.addEventListener("reset", (event) => {
  a.textContent = "";
  b.textContent = "";
  c.textContent = "";
  event.target.reset();
  event.target.newQuestion.focus();
});
