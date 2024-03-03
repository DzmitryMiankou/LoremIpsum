`use strict`;

window.addEventListener("load", function () {
  start();
});

const stars = {
  teg: "div",
  cont: "&#9733;&#9733;&#9733;&#9733;&#9733;",
  classNames: "reviews-slider__stars",
};

const classNameUsers = {
  classNames: "reviews-slider__names",
};

const classNameCommit = {
  classNames: "reviews-slider__commit",
};

const classNameImg = {
  classNames: "reviews-slider__img",
};

const DATA_CARD = [
  {
    fathEl: "li",
    childEl: [
      [
        { ...stars },
        {
          ...classNameCommit,
          teg: "p",
          cont: "Качество отличное, всё соответствует. Клиенту понравилось.",
        },
        { ...classNameUsers, teg: "div", cont: "Александр" },
        { ...classNameImg, teg: "img", cont: "img/ava1.png" },
      ],
      [
        { ...stars },
        { ...classNameCommit, teg: "p", cont: "Очень порадовала прибыль." },
        { ...classNameUsers, teg: "div", cont: "Екатерина" },
        { ...classNameImg, teg: "img", cont: "img/ava4.jpg" },
      ],
      [
        { ...stars },
        {
          ...classNameCommit,
          teg: "p",
          cont: "Взял и не пожалел. Полный пакет и за такие деньги. Качесвто лучшее",
        },
        { ...classNameUsers, teg: "div", cont: "Сергей" },
        { ...classNameImg, teg: "img", cont: "img/ava2.png" },
      ],
      [
        { ...stars },
        {
          ...classNameCommit,
          teg: "p",
          cont: "Пользуюсь уже год и все устраивает.",
        },
        { ...classNameUsers, teg: "div", cont: "Николай" },
        { ...classNameImg, teg: "img", cont: "img/ava3.jpg" },
      ],
      [
        { ...stars },
        { ...classNameCommit, teg: "p", cont: "Замечательно." },
        { ...classNameUsers, teg: "div", cont: "Анастасия" },
        { ...classNameImg, teg: "img", cont: "img/ava7.png" },
      ],
      [
        { ...stars },
        { ...classNameCommit, teg: "p", cont: "Советую покупать." },
        { ...classNameUsers, teg: "div", cont: "Федор" },
        { ...classNameImg, teg: "img", cont: "img/ava5.jpg" },
      ],
      [
        { ...stars },
        {
          ...classNameCommit,
          teg: "p",
          cont: "Прекрасный продукт. Качествено и цена хорошая",
        },
        { ...classNameUsers, teg: "div", cont: "Даниил" },
        { ...classNameImg, teg: "img", cont: "img/ava6.jpg" },
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
  SELECT_ITEM: "form-select__item",
  SELECT_PATH: "form-select__path",
  SELECT_BUTTON_TEXT: "selectButtonText",
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
      e.forEach(({ teg, cont, classNames }) => {
        const children = createElem(teg);
        if (teg === "img") children.src = cont;
        children.className = `${classNames}`;
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
  });
}

let bool = false;
function changeBoolean(event) {
  if (event.target.closest("." + CLASSNAME_ENUM.SELECT_ITEM)) {
    bool = false;
    setValueData(
      "#" + CLASSNAME_ENUM.SELECT_BUTTON_TEXT,
      event.target.textContent
    );
    return deleteClassName();
  }
  if (event.target.closest("#" + CLASSNAME_ENUM.SELECT)) {
    bool = !bool;
    return bool ? addClassName() : deleteClassName();
  }
  if (
    !event.target.closest("." + CLASSNAME_ENUM.SELECT_WINDOW) &&
    !event.target.closest("#" + CLASSNAME_ENUM.SELECT) &&
    bool
  ) {
    bool = false;
    return deleteClassName();
  }
}

function start() {
  generateNavLinkList("reviews-slider__card", SLIDER, DATA_CARD);
  onClickHandler(BUTTONS_SLIDER);
  RANGE.addEventListener("input", (event) =>
    setValueData(".form-slider__text", event.target.value + "%")
  );
  window.addEventListener("click", (event) => changeBoolean(event));

  return () => {
    RANGE.removeEventListener("input", (event) =>
      setValueData(".form-slider__text", event.target.value + "%")
    );
    window.removeEventListener("click", (event) => changeBoolean(event));
  };
}
