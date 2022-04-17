let page = document.querySelector(".page");
let accessibility = document.querySelector(".accessibility");
let modalAccessibility = document.querySelector(".modal");

let blackColorButton = document.querySelector(".color-blackwhite");
let whiteColorButton = document.querySelector(".color-whiteblack");
let blueColorButton = document.querySelector(".color-blue");
let standartColorButton = document.querySelector(".color-standart");

let standartFontSizeButton = document.querySelector(".fontsize-standart");
let fontSize2XButton = document.querySelector(".fontsize-2x");
let fontSize4XButton = document.querySelector(".fontsize-4x");

let imageOffButton = document.querySelector(".image-off");
let imageOnButton = document.querySelector(".image-on");

accessibility.addEventListener("click", modalShow);

blackColorButton.addEventListener("click", colorBlack);
whiteColorButton.addEventListener("click", colorWhite);
blueColorButton.addEventListener("click", colorBlue);
standartColorButton.addEventListener("click", colorStandart);

standartFontSizeButton.addEventListener("click", fontSizeStandart);
fontSize2XButton.addEventListener("click", fontSize2X);
fontSize4XButton.addEventListener("click", fontSize4X);

imageOffButton.addEventListener("click", imageOff);
imageOnButton.addEventListener("click", imageOn);

if (localStorage.accessibility == "open") { modalShow(); }
if (localStorage.color == "white") { colorWhite(); }
if (localStorage.color == "black") { colorBlack(); }
if (localStorage.color == "blue") { colorBlue(); }
if (localStorage.fontsize == "2x") { fontSize2X(); }
if (localStorage.fontsize == "4x") { fontSize4X(); }
if (localStorage.image == "off") { imageOff(); }

/*
* Сохранение данных в localStorage
*/
function localStorageAdd(key, value) {
  localStorage.setItem(key, value);
}

/*
* Очистка данных в localStorage
*/
function localStorageRemove(item) {
  localStorage.removeItem(item);
}

function modalShow(event) {
  if (event != undefined) {
    event.preventDefault();
  }
  if (!modalAccessibility.classList.contains("modal--show")) {
    modalAccessibility.classList.add("modal--show");
    localStorageAdd("accessibility", "open");
    accessibility.title = "Закрыть панель доступности";
  } else {
    modalAccessibility.classList.remove("modal--show");
    localStorageRemove("accessibility");
    accessibility.title = "Открыть панель доступности";
  }
  accessibility.blur();
}

function colorBlue(event) {
  if (event != undefined) {
    event.preventDefault();
  }
  page.classList.remove("page--black");
  page.classList.remove("page--white");
  page.classList.add("page--blue");
  localStorageAdd("color", "blue");
  blueColorButton.blur();
}

function colorBlack(event) {
  if (event != undefined) {
    event.preventDefault();
  }
  page.classList.remove("page--blue");
  page.classList.remove("page--white");
  page.classList.add("page--black");
  localStorageAdd("color", "black");
  blackColorButton.blur();
}

function colorWhite(event) {
  if (event != undefined) {
    event.preventDefault();
  }
  page.classList.remove("page--black");
  page.classList.remove("page--blue");
  page.classList.add("page--white");
  localStorageAdd("color", "white");
  whiteColorButton.blur();
}

function colorStandart(event) {
  if (event != undefined) {
    event.preventDefault();
  }
  page.classList.remove("page--black");
  page.classList.remove("page--blue");
  page.classList.remove("page--white");
  localStorageRemove("color");
  standartColorButton.blur();
}

function fontSizeStandart(event) {
  if (event != undefined) {
    event.preventDefault();
  }
  page.classList.remove("page--font-2x");
  page.classList.remove("page--font-4x");
  localStorageRemove("fontsize");
  standartFontSizeButton.blur();
}

function fontSize2X(event) {
  if (event != undefined) {
    event.preventDefault();
  }
  page.classList.remove("page--font-4x");
  page.classList.add("page--font-2x");
  localStorageAdd("fontsize", "2x");
  fontSize2XButton.blur();
}

function fontSize4X(event) {
  if (event != undefined) {
    event.preventDefault();
  }
  page.classList.remove("page--font-2x");
  page.classList.add("page--font-4x");
  localStorageAdd("fontsize", "4x");
  fontSize4XButton.blur();
}

function imageOff(event) {
  if (event != undefined) {
    event.preventDefault();
  }
  page.classList.add("page--no-img");
  localStorageAdd("image", "off");
  imageOffButton.blur();
}

function imageOn(event) {
  if (event != undefined) {
    event.preventDefault();
  }
  page.classList.remove("page--no-img");
  localStorageRemove("image");
  imageOnButton.blur();
}
