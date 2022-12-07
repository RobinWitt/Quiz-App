// toggle current page

const linkHomepage = document.querySelector('[data-js="link-homepage"]');
const linkBookmarks = document.querySelector('[data-js="link-bookmarks"]');
const linkAddNew = document.querySelector('[data-js="link-add-new"]');
const linkProfileSettings = document.querySelector(
  '[data-js="link-profile-settings"]'
);

const pageHomepage = document.querySelector('[data-js="page-homepage"]');
const pageBookmarks = document.querySelector('[data-js="page-bookmarks"]');
const pageAddNew = document.querySelector('[data-js="page-add-new"]');
const pageProfileSettings = document.querySelector(
  '[data-js="page-profile-settings"]'
);

const allPages = document.querySelectorAll('[data-js*="page"]');

linkHomepage.addEventListener("click", () => {
  allPages.forEach((page) => {
    page.classList.remove("current");
  });
  pageHomepage.classList.add("current");
});

linkBookmarks.addEventListener("click", () => {
  allPages.forEach((page) => {
    page.classList.remove("current");
  });
  pageBookmarks.classList.add("current");
});

linkAddNew.addEventListener("click", () => {
  allPages.forEach((page) => {
    page.classList.remove("current");
  });
  pageAddNew.classList.add("current");
});

linkProfileSettings.addEventListener("click", () => {
  allPages.forEach((page) => {
    page.classList.remove("current");
  });
  pageProfileSettings.classList.add("current");
});
