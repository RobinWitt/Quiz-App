/* toggle bookmark */

const bookmarkIcon = document.querySelector('[data-js="bookmark__svg-path"]');
const bookmarkIcon2 = document.querySelector('[data-js="bookmark__svg-path2"]');

function toggleBookmark() {
  if (bookmarkIcon.getAttribute("fill") === "currentColor") {
    bookmarkIcon.setAttribute("fill", "transparent");
    console.log("unbookmarked");
  } else {
    console.log("bookmarked");
    bookmarkIcon.setAttribute("fill", "currentColor");
  }
}

function toggleBookmark2() {
  if (bookmarkIcon2.getAttribute("fill") === "currentColor") {
    bookmarkIcon2.setAttribute("fill", "transparent");
    console.log("unbookmarked");
  } else {
    console.log("bookmarked");
    bookmarkIcon2.setAttribute("fill", "currentColor");
  }
}
