/* toggle bookmark */

let svgPath = document.querySelector('path[data-js="svgPath"]');

function toggleBookmark() {
  if (
    svgPath.getAttribute("d") ==
    "M17,18L12,15.82L7,18V5H17M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z"
  ) {
    svgPath.setAttribute(
      "d",
      "M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z"
    );
    console.log("if works");
  } else {
    console.log("else works");
    svgPath.setAttribute(
      "d",
      "M17,18L12,15.82L7,18V5H17M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z"
    );
  }
}

/*
const svgDisplay = document.querySelectorAll('[data-js="svg"]');

console.log(svgDisplay);

function toggleBookmark() {
  if (document.getElementsByClassName("bookmark__svg") == "hidden") {
    svgDisplay.classList.remove("hidden");
  } else {
    svgDisplay.classList.add("hidden");
  }
}
*/
