// create question cards
import { questionAPI } from "./db.js";
import { CreateCard } from "./CreateCard.js";
const pageHomepage = document.querySelector('[data-js="page-homepage"]');
const pageBookmarks = document.querySelector('[data-js="page-bookmarks"]');

questionAPI.forEach((question, index) => {
  CreateCard(
    index + 1,
    question.question,
    question.categories,
    question.answer,
    question.bookmarked,
    pageHomepage
  );
  if (question.bookmarked) {
    CreateCard(
      index + 1,
      question.question,
      question.categories,
      question.answer,
      question.bookmarked,
      pageBookmarks
    );
  }

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
});

////////////////////
/* 
function applyBookmark(bookmarkIcon) {
  if (isBookmarked) {
    bookmarkIcon.classList.add("bookmarked");
  } else {
    bookmarkIcon.classList.remove("bookmarked");
  }
}
*/

/*
function bookmarking() {
  const bookmarkIcon = document.querySelector('[data-js="bookmark__svg-path"]');
  const bookmarkButton = document.querySelector('[data-js="toggle-bookmark"]');

  bookmarkButton.addEventListener("click", () => {
    if (isBookmarked === true) {
      isBookmarked = !isBookmarked;
    } else {
      isBookmarked = isBookmarked;
    }
  });
*/
