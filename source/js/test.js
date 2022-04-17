let i = 1, j = 0, correctAnswer = 0;

let formTest = document.querySelector(".test");
let button = document.querySelector(".button--test");
let questionList = document.querySelectorAll(".test__question");
let countQuestion = questionList.length
let testResult = document.querySelector(".test__result");

button.addEventListener("click", CheckTest);

function hash(sign) {
  sign = CryptoJS.MD5(sign);
  sign = sign.toString(CryptoJS.enc.Hex);
  return sign;
}

function CheckTest(event) {

  event.preventDefault();

  isAnswerListContain = false;

  console.log(formTest.classList);

  if (!isAnswerListContain && formTest.classList.contains("test--javascript1")) {
    correctAnswerList = CheckJavaScript1();
    isAnswerListContain = true;
  }
  if (!isAnswerListContain && formTest.classList.contains("test--javascript2")) {
    correctAnswerList = CheckJavaScript2();
    isAnswerListContain = true;
  }
  if (!isAnswerListContain && formTest.classList.contains("test--ajax")) {
    correctAnswerList = CheckAjax();
    isAnswerListContain = true;
  }
  if (!isAnswerListContain && formTest.classList.contains("test--jquery")) {
    correctAnswerList = CheckJquery();
    isAnswerListContain = true;
  }
  if (!isAnswerListContain && formTest.classList.contains("test--php1")) {
    correctAnswerList = CheckPhp1();
    isAnswerListContain = true;
  }
  if (!isAnswerListContain && formTest.classList.contains("test--php2")) {
    correctAnswerList = CheckPhp2();
    isAnswerListContain = true;
  }
  if (!isAnswerListContain && formTest.classList.contains("test--seo")) {
    correctAnswerList = CheckSeo();
    isAnswerListContain = true;
  }

  console.log(correctAnswerList);

  for (i; i < questionList.length + 1; ++i, ++j) {
    blockYesNo = questionList[j].querySelector(".test__yes-no");
    Answer = document.querySelector("input[name=answer" + i + "]:checked");
    if (Answer === null) {
      questionList[j].classList.add("test__question--wrong");
      blockYesNo.innerHTML = "Неверно";
    }
    else {
      if (hash(Answer.value) == correctAnswerList[j]) {
        correctAnswer++;
        questionList[j].classList.add("test__question--correct");
        blockYesNo.innerHTML = "Верно";
      } else {
        questionList[j].classList.add("test__question--wrong");
        blockYesNo.innerHTML = "Неверно";
      }
    }
  }
  ShowTestResult();
}

function ShowTestResult() {
  testResult.classList.add("test__result--show");
  testResult.innerHTML = "Вы ответили верно на " + correctAnswer + " из " + countQuestion + "<br> Процент правильных ответов " + Math.round((correctAnswer / countQuestion) * 100) + "%";
  button.classList.add("button--disabled");
}

function CheckAjax() {
  correctAnswerList = [
    "ed20a959d410ccd843d9e1dfcee04228",
    "6458f3bfa6486a2be61b9fb6f37645c8",
    "3758981810f104dacd144b2df63d5199",
    "1821e85b82eef4439c2f8c3fc98d4e90",
    "1b5adc327828380e2664b544e10da163",
    "5a7d0f68a2f495e13059acdb53b828fa",
    "1efaf9b6cc3ccfb96ce9f57d68c55599",
    "beb27309c9e7f4ae69f810d52e37cb38",
    "d663d87815b60985de0a0c14e5348b5d",
    "eb659277b7925b059be21d6b6b8706f2",
    "d8715694717e03d6c91724777c5ec6e1",
    "44ee9f2fa63a74df527bec99748c045f",
    "3e4f4af15ee8fb8daba13c341527d25d",
    "c606201a9a39dbfd9cee8d2e507e65db"];
  return correctAnswerList;
}

function CheckSeo() {
  correctAnswerList = [
    "f38672fc0f5a142d5387292c0f66e264",
    "08eca8f85ffc96a4ce12615a61969e9d",
    "a860868d23f3a68323a2e3f6563d7f31",
    "a1a4b0b8357dda28641df8175d500ce7",
    "8a368f376816fe99f596da4cd36bd039",
    "1161010044c7871d9c46ae4c5e20d359",
    "70a0e139a867daf7f7eed443e324209e",
    "e12bfe9cd3de52360435fde75c85b1fd",
    "0c4583fcea42d3b745833128265b6307",
    "a402b38cb33838503ac2443734863d7a"];
  return correctAnswerList;
}

function CheckJquery() {
  correctAnswerList = [
    "f90d772f6ec8a075794da4ec4c8e428e",
    "2e27946b909e8a0cb6ec208a84575861",
    "6e91903bacb17353ce29f9719903ddb8",
    "e3cf68d56943452e0c4068f6b928ae1e",
    "5d8a43f5351d12ae37d6859d84f7eb60",
    "6a9457bad5ce1cae35349d1073f4e853",
    "58d59612703b55e8a7f75e297a635abe",
    "2c646a0d4d3b09d24ba695fdc87fe5c2",
    "f427865f6a36dfdf88234fc35dce0709",
    "8943a12f047c6b37e39ce448bda74772",
    "c97bfce72551a6080646d4d21305c981",
    "a3f832284342fc6d05f3b51e2c3af86c",
    "1ab58de12a374e9877b1443199e66d6a",
    "a0948649247d357d8a96afec4a6746ea"];
  return correctAnswerList;
}

function CheckJavaScript1() {
  correctAnswerList = [
    "ebedc55fca9d22899da6864a9967eb3a",
    "31416feaab6f0370293f3e04d464a698",
    "902c001ca3cb198468fc597dc030a5f0",
    "85acd77d0cb3641cec0486a044f11b97",
    "cfaf6cc0f52a5dd12207fa11cf614f68",
    "cc785b198e4c440690d398c400bce507",
    "967c82a333d9da26156309d18914ebbe",
    "60aa2f4e94e8b603cf2ac0f7af903f46",
    "dc0c4df74f268741ddcbe49e41f20b3b",
    "f78668ab26923ccb18210ee6425faba5",
    "d24fc1740d24d665ef93eb3df93f95d7",
    "26b74e929e4387563ff2cc72202d021e",
    "56681cf9798165de5fa208f87e246afb",
    "56e22d3c7647e7a04b4e392b74dd420a",
    "433279a00ca7ef8cf0d12b4e5c2b68ce",
    "b9ff5aeeeef7b9a7a266f06916509fd4",
    "2d0fba00e73aeffbcf551a26275e59ca",
    "d3679eafc7171babb44d38972908a54a",
    "4b1cb4dc8974aa214a258d451a67b20b",
    "38c91b40c1272b6fe65b1d16889c2310",
    "085994a4219799d4d1d76246d1dcfb1f",
    "68e45e8390062cb4ddd94b72f8d65a55"];
  return correctAnswerList;
}

function CheckJavaScript2() {
  correctAnswerList = [
    "de34bc27edc8c05ed0f3385888f941c5",
    "0d004a49802177034b5b2778cb9cada4",
    "81b8da07cef0806b59744f1cddcc8088",
    "1b471a5fd8a046ace73554c6ddaec4a7",
    "d457276ce0c55950faad5da424e3d60e",
    "7ccf4ca3b7de1d8429c7cd36ec668d6e",
    "9540c87dd29eb1c57bb08b019f2f912f",
    "a03a0bb1d4d93de4cc754da444556bdc",
    "e393b3db99318a98a841b18663a4f9d1",
    "bddf950480e6ba0bd2d4bf61ccd2b7dc",
    "7bbc65248d412c87baa20cd49f0f092a",
    "40ca3a0244cfd9a4af8fb841730ee587",
    "651c679c347f3091d2d33ba99217752e",
    "f00299e38b0c056edafded678ff974f4",
    "09a1a9b2019b82f815be9fed124bf759"];
  return correctAnswerList;
}

function CheckPhp1() {
  correctAnswerList = [
    "4a018ed319d0f95b2a806c09c9e1e77f",
    "379c89e0540a0c9bc7b52055a91fcb8f",
    "27e47b3d771f9490be95e1782224ad34",
    "4c9554492bc1bbf0a76d354dc82cdba8",
    "2ebc2b09fde83fc561166c80e00a84dd",
    "64fc9ac52fb5e42c38005465687b5657",
    "5c7feec17789bc73ab130f298a7f9d91",
    "cda1f3110961b781658bdab3fcc09748",
    "3fe8bd8d08d62ee7c76a4718ec8f6cba",
    "1b27b2aadd6786456f7ee95b18a5ab7a",
    "3f00e5d6afd0214282a0211e26b60e3c",
    "8d9b3903d229607f9d36353741894159",
    "4de8baf876e3fd72068c3c5f36c5a66c",
    "19b7bdeff938ef03f1f49ad01ec647ba",
    "3b2bdc8a0ae5a74e070da3b31b3b8eaa"];
  return correctAnswerList;
}

function CheckPhp2() {
  correctAnswerList = [
    "b0527b40b6666d8aa84de5f60f3e7b23",
    "27ab7ce64caef9def6ebed0c53638d0a",
    "cb72f355c12905c376ae08d23469c88b",
    "b0e2e35df0b3c5364a62811114d013dc",
    "282187404093ba82fd2cbab0c0b8de78",
    "a22dd7cea6486ef53e985aa282b54412",
    "715fbac27af0575ca7ab9ee31defb789",
    "609c7276c946fdb2c2a0bfe6688135d4",
    "fc52389e18b520ea4b9df0300bd99b15",
    "65daeed884d6bba7723432c51f2384e8",
    "e0c4e9b1e07aef082f26fd88377444cd",
    "be0ef6ef460b3a50f26ade0063679e0e",
    "69c500faec4dd51576cded34f9a6c561",
    "10b6984ca02e09e4202256d92e3764b4",
    "4e742833a2e4af759451776c4011fb07"];
  return correctAnswerList;
}