// create question cards
import { questionAPI } from "./db.js";

const pageHomepage = document.querySelector('[data-js="page-homepage"]');

const questionData = [...questionAPI];
questionData.forEach((questionCard, index) => {
  const questionNumber = index + 1;
  const question = questionCard.question;
  const answer = questionCard.answer;

  // create new question card
  const newArticle = document.createElement("article");
  newArticle.classList.add("question-card");
  pageHomepage.append(newArticle);
  // create new question card header
  const newHeader = document.createElement("nav");
  newHeader.classList.add("question-card__header");
  newArticle.append(newHeader);
  // create card number
  const newCardNumber = document.createElement("h2");
  newCardNumber.classList.add("question-card__number");
  newCardNumber.textContent = questionNumber;
  newHeader.append(newCardNumber);
  // create new category list
  const newCardCategoryList = document.createElement("ul");
  newCardCategoryList.classList.add("question-card__categories");
  newHeader.append(newCardCategoryList);

  // create new category tag
  const categories = questionCard.categories;
  categories.forEach((category) => {
    const newCardCategoryTag = document.createElement("li");
    newCardCategoryTag.classList.add("question-card__categories-tags");
    newCardCategoryTag.textContent = category;
    newCardCategoryList.append(newCardCategoryTag);
  });

  // create new bookmark icon
  const newBookmarkButton = document.createElement("button");
  newBookmarkButton.classList.add("bookmark");
  newBookmarkButton.setAttribute("aria-label", "click to bookmark");
  newBookmarkButton.setAttribute("data-js", "toggle-bookmark");
  newHeader.append(newBookmarkButton);
  // create new svg
  const newSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  newSVG.classList.add("bookmark__svg");
  newSVG.setAttribute("viewBox", "0 0 24 24");
  newBookmarkButton.append(newSVG);
  //create new svg path
  const newSVGPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  newSVGPath.setAttribute("data-js", "bookmark__svg-path");
  newSVGPath.setAttribute("fill", "transparent");
  newSVGPath.setAttribute("stroke", "var(--color-accent");
  newSVGPath.setAttribute(
    "d",
    "M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z"
  );
  newSVG.append(newSVGPath);
  // create new question title
  const newQuestion = document.createElement("h3");
  newQuestion.textContent = question;
  newArticle.append(newQuestion);
  // create new show answer button
  const newAnswerButton = document.createElement("button");
  newAnswerButton.classList.add("question-card__button-show-answer");
  newAnswerButton.setAttribute("data-js", "question-card__button-show-answer");
  newAnswerButton.textContent = "Show Answer";
  newArticle.append(newAnswerButton);
  // create new answer text
  const newAnswerText = document.createElement("p");
  newAnswerText.classList.add("question-card__answer");
  newAnswerText.setAttribute("data-js", "question-card__answer");
  newAnswerText.textContent = answer;
  newArticle.append(newAnswerText);
});
