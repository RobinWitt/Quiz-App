// create a new question card

const createNewCardForm = document.querySelector('[data-js="new-card__form"]');
const newCardDisplay = document.querySelector('[data-js="newCard__display"]');
const questionCardArticle = document.querySelector(
  '[data-js="question-card__article"]'
);

createNewCardForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // get form data
  const newQuestionData = new FormData(event.target);
  const newQuestionEntry = Object.fromEntries(newQuestionData);

  // enter new data in elements
  const cardNumber = document.querySelector(
    '[data-js="question-card__number"]'
  );
  cardNumber.textContent = "13";
  //add card categories
  const category = document.querySelector(
    '[data-js="question-card__categories-tags"]'
  );
  category.textContent = newQuestionEntry.newCardCategory;
  // create new question text
  const question = document.querySelector(
    '[data-js="question-card__question"]'
  );
  question.textContent = newQuestionEntry.newCardQuestion;
  // create new answer text
  const answer = document.querySelector('[data-js="question-card__answer"]');
  answer.textContent = newQuestionEntry.newCardAnswer;

  // make article visible
  questionCardArticle.style.display = "flex";

  // clone article and make it visible
  /*
  const clone = questionCardArticle.cloneNode(true);
  newCardDisplay.append(clone);
  clone.style.display = "block";
  console.log(clone);
  */

  //event.target.reset();
});
