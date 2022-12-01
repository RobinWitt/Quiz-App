// toggle bookmarks

const bookmark = document.querySelectorAll('[data-js="bookmark__svg-path"]');

document
  .querySelectorAll('[data-js="toggle-bookmark"]')
  .forEach((button, index) => {
    button.onclick = (event) => {
      if (bookmark.item(index).getAttribute("fill") === "currentColor") {
        bookmark.item(index).setAttribute("fill", "transparent");
      } else {
        bookmark.item(index).setAttribute("fill", "currentColor");
      }
    };
  });
