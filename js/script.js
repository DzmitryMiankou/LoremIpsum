`use strict`;

window.addEventListener("load", function () {
  start();
});

///////////////////////// generate a list in nav ////////////////////////
/** 
const list = document.querySelector(`.main-nav__list`);

const arrLink = [
  { fathEl: "li", childEl: "a", text: "Бизнес", href: "/" },
  { fathEl: "li", childEl: "a", text: "О нас", href: "#" },
  { fathEl: "li", childEl: "a", text: "Цены", href: "#" },
  { fathEl: "li", childEl: "a", text: "Оформить заказ", href: "#" },
];

const listMain = [
  { fathEl: "li", childEl: "a", text: "Totam rem aperiam eaque ipsa" },
  {
    fathEl: "li",
    childEl: "a",
    text: "Sit voluptatem accusantium doloremque laudantium",
  },
  {
    fathEl: "li",
    childEl: "a",
    text: "Sed ut perspiciatis, unde omnis iste natus error",
  },
];

const createElem = (elem) => document.createElement(elem);

function generateNavLinkList(className, fatherElem, className2, arr) {
  arr.forEach(({ text, href, fathEl, childEl }) => {
    const father = createElem(fathEl);
    const children = createElem(childEl);
    father.className = `${className}`;
    children.className = `${className2}`;
    children.innerHTML = text;
    if (href.lenght !== 0) {
      children.href = href;
    } else return;
    if (href === "/")
      children.className = `${className2} ${className2}` + `--active`;
    fatherElem.append(father);
    father.append(children);
  });
}

function start() {
  generateNavLinkList("main-nav__item", list, "main-nav__link", arrLink);
}
*/
