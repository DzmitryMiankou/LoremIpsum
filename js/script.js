`use strict`;

window.addEventListener("load", function () {
  start();
});

const DATA_CARD = [
  {
    fathEl: "li",
    childEl: [
      [
        { teg: "div", cont: "*****" },
        { teg: "div", cont: "Александр" },
        {
          teg: "p",
          cont: "Качество отличное, всё соответствует. Клиенту понравилось.",
        },
      ],
      [
        { teg: "div", cont: "*****" },
        { teg: "div", cont: "Екатерина" },
        {
          teg: "p",
          cont: "Очень порадовала прибыль.",
        },
      ],
      [
        { teg: "div", cont: "*****" },
        { teg: "div", cont: "Сергей" },
        {
          teg: "p",
          cont: "Взял и не пожалел. Полный пакет и за такие деньги. Качесвто лучшее",
        },
      ],
      [
        { teg: "div", cont: "*****" },
        { teg: "div", cont: "Николай" },
        {
          teg: "p",
          cont: "Пользуюсь уже год и все устраивает.",
        },
      ],
      [
        { teg: "div", cont: "*****" },
        { teg: "div", cont: "Анастасия" },
        {
          teg: "p",
          cont: "Замечательно.",
        },
      ],
      [
        { teg: "div", cont: "*****" },
        { teg: "div", cont: "Федор" },
        {
          teg: "p",
          cont: "Советую покупать.",
        },
      ],
      [
        { teg: "div", cont: "*****" },
        { teg: "div", cont: "Даниил" },
        {
          teg: "p",
          cont: "Прекрасный продукт. Качествено и цена хорошая",
        },
      ],
    ],
  },
];

const CLASSNAME_ENUM = {
  RANGE: "slider",
  SELECT: "select_button",
  SELECT_WINDOW: "form-select__window",
  SLIDER: "reviews-slider__content",
  BUTTONS_SLIDER: "reviews-slider__button",
  SELECT_ICON: "form-select__icon",
  SELECT_PATH: "form-select__path",
};

const RANGE = document.querySelector("." + CLASSNAME_ENUM.RANGE);
const SELECT = document.querySelector("#" + CLASSNAME_ENUM.SELECT);
const SELECT_WINDOW = document.querySelector(
  "." + CLASSNAME_ENUM.SELECT_WINDOW
);
const SLIDER = document.querySelector("." + CLASSNAME_ENUM.SLIDER);
const BUTTONS_SLIDER = document.querySelectorAll(
  "." + CLASSNAME_ENUM.BUTTONS_SLIDER
);
const SELECT_ICON = document.querySelector("." + CLASSNAME_ENUM.SELECT_ICON);
const SELECT_PATH = document.querySelector("." + CLASSNAME_ENUM.SELECT_PATH);

const deleteClassName = () => {
  const timer = setTimeout(() => {
    SELECT_WINDOW.classList.remove(CLASSNAME_ENUM.SELECT_WINDOW + "--clouse");
    SELECT_WINDOW.classList.remove(CLASSNAME_ENUM.SELECT_WINDOW + "--active");

    SELECT.classList.remove("form__input--select");
    SELECT_PATH.classList.remove(CLASSNAME_ENUM.SELECT_PATH + "--active");
  }, 300);
  SELECT_ICON.classList.remove(CLASSNAME_ENUM.SELECT_ICON + "--active");
  SELECT_WINDOW.classList.add(CLASSNAME_ENUM.SELECT_WINDOW + "--clouse");

  return () => clearTimeout(timer);
};

const addClassName = () => {
  SELECT.classList.add("form__input--select");
  SELECT_ICON.classList.add(CLASSNAME_ENUM.SELECT_ICON + "--active");
  SELECT_PATH.classList.add(CLASSNAME_ENUM.SELECT_PATH + "--active");
  SELECT_WINDOW.classList.add(CLASSNAME_ENUM.SELECT_WINDOW + "--active");
};

const createElem = (elem) => document.createElement(elem);
const setValueData = (className, value) =>
  (document.querySelector(className).innerHTML = value);

function generateNavLinkList(className, fatherElem, arr) {
  arr.forEach(({ childEl, fathEl }) => {
    childEl.forEach((e) => {
      const father = createElem(fathEl);
      father.className = `${className}`;
      fatherElem.append(father);
      e.forEach(({ teg, cont }) => {
        const children = createElem(teg);
        children.innerHTML = cont;
        father.append(children);
      });
    });
  });
}

const init = 500;
function onClickHandler(buttons) {
  buttons.forEach((button) => {
    button.addEventListener("click", (event) =>
      event.target.id === "left"
        ? (SLIDER.scrollLeft += -init)
        : (SLIDER.scrollLeft += init)
    );
    return () => button.removeEventListener;
  });
}

let bool = false;
function openWindow() {
  bool = !bool;
  return bool ? addClassName() : deleteClassName();
}

function start() {
  generateNavLinkList("reviews-slider__card", SLIDER, DATA_CARD);
  onClickHandler(BUTTONS_SLIDER);
  RANGE.addEventListener("mouseup", (event) =>
    setValueData(".form-slider__text", event.target.value + "%")
  );
  SELECT.addEventListener("click", () => openWindow());
  return;
}
