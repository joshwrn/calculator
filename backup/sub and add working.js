/* variable for storing numbers */
let currentOperation = "";
let oldNumber = "0"; //a
let usedEqual = ""; //variable for storing operator info if equal gets used
let lastOperator = ""; //stores last operator

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
  current.innerHTML += "1";
  currentOperation += "1";
  console.log(currentOperation);
  console.log("1");
};

two.onclick = function () {
  current.innerHTML += "2";
  currentOperation += "2";
  console.log(currentOperation);
  console.log("2");
};

three.onclick = function () {
  current.innerHTML += "3";
  currentOperation += "3";
  console.log(currentOperation);
  console.log("3");
};

four.onclick = function () {
  current.innerHTML += "4";
  currentOperation += "4";
  console.log(currentOperation);
  console.log("4");
};

five.onclick = function () {
  current.innerHTML += "5";
  currentOperation += "5";
  console.log(currentOperation);
  console.log("5");
};

six.onclick = function () {
  current.innerHTML += "6";
  currentOperation += "6";
  console.log(currentOperation);
  console.log("6");
};

seven.onclick = function () {
  current.innerHTML += "7";
  currentOperation += "7";
  console.log(currentOperation);
  console.log("7");
};

eight.onclick = function () {
  current.innerHTML += "8";
  currentOperation += "8";
  console.log(currentOperation);
  console.log("8");
};

nine.onclick = function () {
  current.innerHTML += "9";
  currentOperation += "9";
  console.log(currentOperation);
  console.log("9");
};

zero.onclick = function () {
  current.innerHTML += "0";
  currentOperation += "0";
  console.log(currentOperation);
  console.log("0");
};

/* other */
decimal.onclick = function () {
  if (!current.innerHTML.includes(".")) {
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
  }
};

//function to auto run right operation on any operation click
let rightOperation = function () {
  if (lastOperator == "-") {
    operate("-", subtract);
  } else if (lastOperator == "+") {
    operate("+", add);
  } else if (lastOperator == "*") {
    multiplyBtn.onclick();
  } else if (lastOperator == "/") {
    divideBtn.onclick();
  }
};

addBtn.onclick = function () {
  operate("+", add);
  lastOperator = "+";
};

subtractBtn.onclick = function () {
  operate("-", subtract);
  lastOperator = "-";
};

multiplyBtn.onclick = function () {
  operate("*", multiply);
  lastOperator = "*";
};

divideBtn.onclick = function () {
  operate("/", divide);
  lastOperator = "/";
};
//infine loop of going to operator
/* function to perform any operation */
let operate = function (sym, func) {
  console.log(lastOperator + " last symbol");
  console.log(sym + " current symbol");
  whichOperator();
  if (!(lastOperator == sym) && history.innerHTML != "history") {
    console.log("works");
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
    console.log("symm used equal or same operator, or first operation");
  } else if (oldNumber == "not clear") {
    oldNumber = currentOperation;
    history.innerHTML = currentOperation + " " + sym;
    currentOperation = "";
    current.innerHTML = "";
    console.log("idk why clear doesnt work");
  } else if (history.innerHTML == "" && !current.innerHTML == "") {
    history.innerHTML = currentOperation + " " + sym;
    currentOperation = "";
    current.innerHTML = "";
    console.log("pressed operation after equal");
  }
};

/* operation buttons */
test = function () {
  console.log("test");
  if (
    whichOperator() == "-" ||
    whichOperator() == "*" ||
    whichOperator() == "/"
  ) {
    rightOperation();
    history.innerHTML = oldNumber + " +";
    console.log("finished original operation");
  } else if (
    (whichOperator() == "+" && currentOperation != "") ||
    (!history.innerHTML == "" &&
      checkOperators() == true &&
      !current.innerHTML == "")
  ) {
    let result = add(oldNumber, currentOperation);
    oldNumber = result;
    currentOperation = "";
    current.innerHTML = "";
    history.innerHTML = oldNumber + " +";
    usedEqual = oldNumber;
    console.log("used equal or same operator, or first operation");
  } else if (oldNumber == "not clear") {
    oldNumber = currentOperation;
    history.innerHTML = currentOperation + " +";
    currentOperation = "";
    current.innerHTML = "";
    console.log("idk why clear doesnt work");
  } else if (history.innerHTML == "" && !current.innerHTML == "") {
    history.innerHTML = currentOperation + " +";
    currentOperation = "";
    current.innerHTML = "";
    console.log("pressed operation after equal");
  }
};

ohlol = function () {
  if (history.innerHTML.includes("-") && !currentOperation == "") {
    let result = subtract(oldNumber, currentOperation);
    oldNumber = result;
    currentOperation = "";
    current.innerHTML = "";
    history.innerHTML = oldNumber + " -";
  } else if (checkOperators() == true) {
    oldNumber = currentOperation;
    history.innerHTML = currentOperation + " -";
    currentOperation = "";
    current.innerHTML = "";
    console.log("-");
  }
};

abcd = function () {
  if (history.innerHTML.includes("*") && !currentOperation == "") {
    let result = multiply(oldNumber, currentOperation);
    oldNumber = result;
    currentOperation = "";
    current.innerHTML = "";
    history.innerHTML = oldNumber + " *";
  } else if (checkOperators() == true) {
    oldNumber = currentOperation;
    history.innerHTML = currentOperation + " *";
    currentOperation = "";
    current.innerHTML = "";
    console.log("*");
  }
};

abc = function () {
  if (history.innerHTML.includes("/") && !currentOperation == "") {
    let result = divide(oldNumber, currentOperation);
    oldNumber = result;
    currentOperation = "";
    current.innerHTML = "";
    history.innerHTML = oldNumber + " /";
  } else if (checkOperators() == true) {
    oldNumber = currentOperation;
    history.innerHTML = currentOperation + " /";
    currentOperation = "";
    current.innerHTML = "";
    console.log("/");
  }
};

/* equals */
equals.onclick = function () {
  if (history.innerHTML.includes("+")) {
    addBtn.onclick();
    history.innerHTML = "";
    current.innerHTML = usedEqual;
    currentOperation = usedEqual;
  } else if (history.innerHTML.includes("-")) {
    subtractBtn.onclick();
    history.innerHTML = "";
    current.innerHTML = usedEqual;
    currentOperation = usedEqual;
  } else if (history.innerHTML.includes("*")) {
    multiplyBtn.onclick();
    history.innerHTML = "";
    current.innerHTML = usedEqual;
    currentOperation = usedEqual;
  } else if (history.innerHTML.includes("/")) {
    divideBtn.onclick();
    history.innerHTML = "";
    current.innerHTML = usedEqual;
    currentOperation = usedEqual;
  }
};

/* operations */
function add(a, b) {
  let int1 = parseFloat(a);
  let int2 = parseFloat(b);
  return parseFloat(int1 + int2);
}

function subtract(a, b) {
  let int1 = parseFloat(a);
  let int2 = parseFloat(b);
  return parseFloat(int1 - int2);
}

function multiply(a, b) {
  let int1 = parseFloat(a);
  let int2 = parseFloat(b);
  return parseFloat(int1 * int2);
}

function divide(a, b) {
  let int1 = parseFloat(a);
  let int2 = parseFloat(b);
  return parseFloat(int1 / int2);
}
