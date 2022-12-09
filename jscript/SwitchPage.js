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
    linkAddNew.classList.remove("active");
    linkBookmarks.classList.remove("active");
    linkProfileSettings.classList.remove("active");
  });
  pageHomepage.classList.add("current");
  linkHomepage.classList.add("active");
});

linkBookmarks.addEventListener("click", () => {
  allPages.forEach((page) => {
    page.classList.remove("current");
    linkAddNew.classList.remove("active");
    linkHomepage.classList.remove("active");
    linkProfileSettings.classList.remove("active");
  });
  pageBookmarks.classList.add("current");
  linkBookmarks.classList.add("active");
});

linkAddNew.addEventListener("click", () => {
  allPages.forEach((page) => {
    page.classList.remove("current");
    linkHomepage.classList.remove("active");
    linkBookmarks.classList.remove("active");
    linkProfileSettings.classList.remove("active");
  });
  pageAddNew.classList.add("current");
  linkAddNew.classList.add("active");
});

linkProfileSettings.addEventListener("click", () => {
  allPages.forEach((page) => {
    page.classList.remove("current");
    linkAddNew.classList.remove("active");
    linkBookmarks.classList.remove("active");
    linkHomepage.classList.remove("active");
  });
  pageProfileSettings.classList.add("current");
  linkProfileSettings.classList.add("active");
});
