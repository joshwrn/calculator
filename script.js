/* variables for storing numbers */
let currentOperation = "";
let oldNumber = "not clear"; //a
let usedEqual = ""; //variable for storing operator info if equal gets used
let resetAfterEqual = "false";
let lastOperator = ""; //stores last operator
let maxLength = 20; //max length of number that can be entered

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
    root.style.setProperty("--theme-history-text", "rgba(0, 0, 0, 0.493)");
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
    root.style.setProperty(
      "--theme-history-text",
      "rgba(255, 255, 255, 0.493)"
    );
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
  if (resetAfterEqual == "true") {
    clear.onclick();
    resetAfterEqual = "false";
    current.innerHTML += "1";
    currentOperation += "1";
    console.log(currentOperation);
    console.log("1");
  } else if (currentOperation.length < maxLength) {
    current.innerHTML += "1";
    currentOperation += "1";
    console.log(currentOperation);
    console.log("1");
  }
};

two.onclick = function () {
  if (resetAfterEqual == "true") {
    clear.onclick();
    resetAfterEqual = "false";
    current.innerHTML += "2";
    currentOperation += "2";
    console.log(currentOperation);
    console.log("2");
  } else if (currentOperation.length < maxLength) {
    current.innerHTML += "2";
    currentOperation += "2";
    console.log(currentOperation);
    console.log("2");
  }
};

three.onclick = function () {
  if (resetAfterEqual == "true") {
    clear.onclick();
    resetAfterEqual = "false";
    current.innerHTML += "3";
    currentOperation += "3";
    console.log(currentOperation);
    console.log("3");
  } else if (currentOperation.length < maxLength) {
    current.innerHTML += "3";
    currentOperation += "3";
    console.log(currentOperation);
    console.log("3");
  }
};

four.onclick = function () {
  if (resetAfterEqual == "true") {
    clear.onclick();
    resetAfterEqual = "false";
    current.innerHTML += "4";
    currentOperation += "4";
    console.log(currentOperation);
    console.log("4");
  } else if (currentOperation.length < maxLength) {
    current.innerHTML += "4";
    currentOperation += "4";
    console.log(currentOperation);
    console.log("4");
  }
};

five.onclick = function () {
  if (resetAfterEqual == "true") {
    clear.onclick();
    resetAfterEqual = "false";
    current.innerHTML += "5";
    currentOperation += "5";
    console.log(currentOperation);
    console.log("5");
  } else if (currentOperation.length < maxLength) {
    current.innerHTML += "5";
    currentOperation += "5";
    console.log(currentOperation);
    console.log("5");
  }
};

six.onclick = function () {
  if (resetAfterEqual == "true") {
    clear.onclick();
    resetAfterEqual = "false";
    current.innerHTML += "6";
    currentOperation += "6";
    console.log(currentOperation);
    console.log("6");
  } else if (currentOperation.length < maxLength) {
    current.innerHTML += "6";
    currentOperation += "6";
    console.log(currentOperation);
    console.log("6");
  }
};

seven.onclick = function () {
  console.log(resetAfterEqual);
  if (resetAfterEqual == "true") {
    clear.onclick();
    resetAfterEqual = "false";
    current.innerHTML += "7";
    currentOperation += "7";
    console.log(currentOperation);
    console.log("7");
  } else if (currentOperation.length < maxLength) {
    current.innerHTML += "7";
    currentOperation += "7";
    console.log(currentOperation);
    console.log("7");
  }
};

eight.onclick = function () {
  if (resetAfterEqual == "true") {
    clear.onclick();
    resetAfterEqual = "false";
    current.innerHTML += "8";
    currentOperation += "8";
    console.log(currentOperation);
    console.log("8");
  } else if (currentOperation.length < maxLength) {
    current.innerHTML += "8";
    currentOperation += "8";
    console.log(currentOperation);
    console.log("8");
  }
};

nine.onclick = function () {
  if (resetAfterEqual == "true") {
    clear.onclick();
    resetAfterEqual = "false";
    current.innerHTML += "9";
    currentOperation += "9";
    console.log(currentOperation);
    console.log("9");
  } else if (currentOperation.length < maxLength) {
    current.innerHTML += "9";
    currentOperation += "9";
    console.log(currentOperation);
    console.log("9");
  }
};

zero.onclick = function () {
  if (resetAfterEqual == "true") {
    clear.onclick();
    resetAfterEqual = "false";
    current.innerHTML += "0";
    currentOperation += "0";
    console.log(currentOperation);
    console.log("0");
  } else if (currentOperation.length < maxLength) {
    current.innerHTML += "0";
    currentOperation += "0";
    console.log(currentOperation);
    console.log("0");
  }
};

/* other */
decimal.onclick = function () {
  if (resetAfterEqual == "true") {
    clear.onclick();
    resetAfterEqual = "false";
    current.innerHTML += ".";
    currentOperation += ".";
    console.log(".");
  } else if (
    !current.innerHTML.includes(".") &&
    currentOperation.length < maxLength - 1
  ) {
    current.innerHTML += ".";
    currentOperation += ".";
    console.log(".");
  }
};

clear.onclick = function () {
  current.innerHTML = "";
  history.innerHTML = "";
  currentOperation = "";
  oldNumber = "not clear";
  usedEqual = "";
  console.log("clear");
  lastOperator = "";
  resetAfterEqual = "false";
};

/* check for operators already used */

let checkOperators = function () {
  if (
    !(whichOperator() == "+") &&
    !(whichOperator() == "-") &&
    !(whichOperator() == "*") &&
    !(whichOperator() == "/")
  ) {
    return true;
  } else {
    return false;
  }
};

// find which operator is being used
let whichOperator = function () {
  if (history.innerHTML.includes("+")) {
    lastOperator = "+";
  } else if (history.innerHTML.includes("-")) {
    lastOperator = "-";
  } else if (history.innerHTML.includes("*")) {
    lastOperator = "*";
  } else if (history.innerHTML.includes("/")) {
    lastOperator = "/";
  }
};

//function to auto run right operation on any operation click
let rightOperation = function () {
  if (lastOperator == "-") {
    operate("-", subtract);
  } else if (lastOperator == "+") {
    operate("+", add);
  } else if (lastOperator == "*") {
    operate("*", multiply);
  } else if (lastOperator == "/") {
    operate("/", divide);
  }
};

addBtn.onclick = function () {
  resetAfterEqual = "false";
  operate("+", add);
  lastOperator = "+";
};

subtractBtn.onclick = function () {
  if (
    (history.innerHTML == "" && current.innerHTML == "") ||
    (history.innerHTML.includes("+") && current.innerHTML == "") ||
    (history.innerHTML.includes("*") && current.innerHTML == "") ||
    (history.innerHTML.includes("/") && current.innerHTML == "") ||
    (history.innerHTML.includes("-") && current.innerHTML == "")
  ) {
    current.innerHTML += "-";
    currentOperation += "-";
    console.log(currentOperation);
    console.log("-");
  } else {
    resetAfterEqual = "false";
    operate("-", subtract);
    lastOperator = "-";
  }
};

multiplyBtn.onclick = function () {
  resetAfterEqual = "false";
  operate("*", multiply);
  lastOperator = "*";
};

divideBtn.onclick = function () {
  resetAfterEqual = "false";
  operate("/", divide);
  lastOperator = "/";
};
//infine loop of going to operator
/* function to perform any operation */
let operate = function (sym, func) {
  if (
    !(lastOperator == sym) &&
    history.innerHTML != "history" &&
    oldNumber != "not clear"
  ) {
    rightOperation();
    history.innerHTML = oldNumber + " " + sym;
    console.log("finished original operation");
  } else if (
    (whichOperator() == sym && currentOperation != "") ||
    (!history.innerHTML == "" &&
      checkOperators() == true &&
      !current.innerHTML == "")
  ) {
    let result = func(oldNumber, currentOperation);
    oldNumber = result;
    currentOperation = "";
    current.innerHTML = "";
    history.innerHTML = oldNumber + " " + sym;
    usedEqual = oldNumber;
    console.log("used equal or same operator, or first operation");
  } else if (oldNumber == "not clear") {
    oldNumber = currentOperation;
    history.innerHTML = currentOperation + " " + sym;
    currentOperation = "";
    current.innerHTML = "";
    console.log("force clear");
  } else if (history.innerHTML == "" && !current.innerHTML == "") {
    history.innerHTML = currentOperation + " " + sym;
    currentOperation = "";
    current.innerHTML = "";
    console.log("pressed operation after equal");
  }
};

/* equals */
equals.onclick = function () {
  if (history.innerHTML.includes("+")) {
    addBtn.onclick();
    history.innerHTML = "";
    current.innerHTML = usedEqual;
    currentOperation = usedEqual;
    resetAfterEqual = "true";
  } else if (history.innerHTML.includes("-")) {
    subtractBtn.onclick();
    history.innerHTML = "";
    current.innerHTML = usedEqual;
    currentOperation = usedEqual;
    resetAfterEqual = "true";
  } else if (history.innerHTML.includes("*")) {
    multiplyBtn.onclick();
    history.innerHTML = "";
    current.innerHTML = usedEqual;
    currentOperation = usedEqual;
    resetAfterEqual = "true";
  } else if (history.innerHTML.includes("/")) {
    divideBtn.onclick();
    history.innerHTML = "";
    current.innerHTML = usedEqual;
    currentOperation = usedEqual;
    resetAfterEqual = "true";
  }
};

/* operations */
function add(a, b) {
  let int1 = parseFloat(a);
  let int2 = parseFloat(b);
  return parseFloat((int1 + int2).toFixed(2));
}

function subtract(a, b) {
  let int1 = parseFloat(a);
  let int2 = parseFloat(b);
  return parseFloat((int1 - int2).toFixed(2));
}

function multiply(a, b) {
  let int1 = parseFloat(a);
  let int2 = parseFloat(b);
  return parseFloat((int1 * int2).toFixed(2));
}

function divide(a, b) {
  let int1 = parseFloat(a);
  let int2 = parseFloat(b);
  return parseFloat((int1 / int2).toFixed(2));
}
