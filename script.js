/* html calc elements */
let subtractBtn = document.getElementById("subtract");
let addBtn = document.getElementById("add");
let multiplyBtn = document.getElementById("multiply");
let divideBtn = document.getElementById("divide");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");
let decimal = document.getElementById("decimal");
let clear = document.getElementById("clear");
let equals = document.getElementById("equals");

/* html icon elements */
let root = document.documentElement;
let mode = document.getElementById("mode");
let modeToggle = "dark";
mode.onclick = function () {
  if (modeToggle == "dark") {
    root.style.setProperty("--theme-display-text", "black");
    root.style.setProperty("--theme-history-text", "black");
    root.style.setProperty("--theme-btn-color", "black");
    root.style.setProperty("--theme-calculator", "rgba(133, 115, 115, 0.164)");
    root.style.setProperty("--theme-display", "rgba(255, 255, 255, 0.445)");
    root.style.setProperty("--theme-grid", "rgba(255, 255, 255, 0.589)");
    root.style.setProperty(
      "--theme-operation-buttons",
      "rgba(255, 255, 255, 0.12)"
    );
    root.style.setProperty("--theme-equals", "rgba(255, 255, 255, 0.3)");
    root.style.setProperty("--theme-equals-hover", "rgba(255, 255, 255, 0.45)");
    modeToggle = "light";
    console.log("light");
  } else {
    root.style.setProperty("--theme-display-text", "white");
    root.style.setProperty("--theme-history-text", "white");
    root.style.setProperty("--theme-btn-color", "white");
    root.style.setProperty("--theme-calculator", "rgba(133, 115, 115, 0.164)");
    root.style.setProperty("--theme-display", "rgba(0, 0, 0, 0.445)");
    root.style.setProperty("--theme-grid", "rgba(0, 0, 0, 0.589)");
    root.style.setProperty("--theme-operation-buttons", "rgba(0, 0, 0, 0.12)");
    root.style.setProperty("--theme-equals", "rgba(0, 0, 0, 0.3)");
    root.style.setProperty("--theme-equals-hover", "rgba(0, 0, 0, 0.45)");
    modeToggle = "dark";
    console.log("dark");
  }
};

let wallpaper = document.getElementById("wallpaper");
let wallpaperToggle = "gradient";
wallpaper.onclick = function () {
  if (wallpaperToggle == "gradient") {
    document.body.style.backgroundImage = "url(photos/bg.jpeg)";
    wallpaperToggle = "image";
    console.log("image");
  } else {
    document.body.style.backgroundImage = "";
    wallpaperToggle = "gradient";
    console.log("gradient");
  }
};

/* html display elements */
let history = document.getElementById("history-text");
let current = document.getElementById("current-text");

/* update display */
/* number buttons */
one.onclick = function () {
  current.innerHTML += "1";
  console.log("1");
};

two.onclick = function () {
  current.innerHTML += "2";
  console.log("2");
};

three.onclick = function () {
  current.innerHTML += "3";
  console.log("3");
};

four.onclick = function () {
  current.innerHTML += "4";
  console.log("4");
};

five.onclick = function () {
  current.innerHTML += "5";
  console.log("5");
};

six.onclick = function () {
  current.innerHTML += "6";
  console.log("6");
};

seven.onclick = function () {
  current.innerHTML += "7";
  console.log("7");
};

eight.onclick = function () {
  current.innerHTML += "8";
  console.log("8");
};

nine.onclick = function () {
  current.innerHTML += "9";
  console.log("9");
};

zero.onclick = function () {
  current.innerHTML += "0";
  console.log("0");
};

/* other */
decimal.onclick = function () {
  current.innerHTML += ".";
  console.log(".");
};

clear.onclick = function () {
  current.innerHTML = "";
  history.innerHTML = "history";
  console.log("clear");
};

/* operation buttons */
addBtn.onclick = function () {
  current.innerHTML += "+";
  console.log("+");
};

subtractBtn.onclick = function () {
  current.innerHTML += "-";
  console.log("-");
};

multiplyBtn.onclick = function () {
  current.innerHTML += "*";
  console.log("*");
};

divideBtn.onclick = function () {
  current.innerHTML += "/";
  console.log("/");
};

/* equals */
equals.onclick = function () {
  current.innerHTML += "=";
  console.log("=");
};

/* operations */
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(opperation, num1, num2) {}

console.log(add(1, 7));
console.log(divide(1, 7));
