// create a new question card

const createNewCardForm = document.querySelector('[data-js="new-card__form"]');
const newCardDisplay = document.querySelector('[data-js="newCard__display"]');

createNewCardForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newQuestionData = new FormData(event.target);
  const newQuestionEntry = Object.fromEntries(newQuestionData);
  console.log(newQuestionEntry);
  // create new article
  const newCard = document.createElement("article");
  newCard.classList.add("question-card");
  newCardDisplay.append(newCard);
  // create new question number
  const newQuestionNumber = document.createElement("h2");
  newCard.append(newQuestionNumber);
  newQuestionNumber.classList.add("question-card__number");
  newQuestionNumber.textContent = "#";
  // create new question text
  const newQuestion = document.createElement("h3");
  newCard.append(newQuestion);
  newQuestion.textContent = newQuestionEntry.newCardQuestion;
  // create new category list
  const newCategoryList = document.createElement("ul");
  newCategoryList.classList.add("question-card__categories");
  newCard.append(newCategoryList);
  // create new categories
  const newCategories = document.createElement("li");
  newCategories.classList.add("question-card__categories-tags");
  newCategoryList.append(newCategories);
  newCategories.textContent = newQuestionEntry.newCardCategory;
  // create new show answer button
  const newShowAnswerButton = document.createElement("button");
  newCard.append(newShowAnswerButton);
  newShowAnswerButton.classList.add("question-card__button-show-answer");
  newShowAnswerButton.textContent = "Show Answer";
  // create new answer text
  const newAnswer = document.createElement("p");
  newCard.append(newAnswer);
  newAnswer.textContent = newQuestionEntry.newCardAnswer;

  _event.target.reset();
});
