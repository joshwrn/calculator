/* variables for storing numbers */
let currentOperation = '';
let oldNumber = 'not clear'; //a
let usedEqual = ''; //variable for storing operator info if equal gets used
let resetAfterEqual = 'false';
let lastOperator = ''; //stores last operator
let maxLength = 20; //max length of number that can be entered

/* html calc elements */
const subtractBtn = document.getElementById('subtract');
const addBtn = document.getElementById('add');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');
const decimal = document.getElementById('decimal');
const clear = document.getElementById('clear');
const equals = document.getElementById('equals');

/* html icon elements */
const root = document.documentElement;
const mode = document.getElementById('mode');
let modeToggle = 'dark';
mode.onclick = () => {
  if (modeToggle == 'dark') {
    root.style.setProperty('--theme-display-text', 'black');
    root.style.setProperty('--theme-history-text', 'rgba(0, 0, 0, 0.493)');
    root.style.setProperty('--theme-btn-color', 'black');
    root.style.setProperty('--theme-calculator', 'rgba(133, 115, 115, 0.164)');
    root.style.setProperty('--theme-display', 'rgba(255, 255, 255, 0.445)');
    root.style.setProperty('--theme-grid', 'rgba(255, 255, 255, 0.589)');
    root.style.setProperty(
      '--theme-operation-buttons',
      'rgba(255, 255, 255, 0.12)'
    );
    root.style.setProperty('--theme-equals', 'rgba(255, 255, 255, 0.3)');
    root.style.setProperty('--theme-equals-hover', 'rgba(255, 255, 255, 0.45)');
    modeToggle = 'light';
    console.log('light');
  } else {
    root.style.setProperty('--theme-display-text', 'white');
    root.style.setProperty(
      '--theme-history-text',
      'rgba(255, 255, 255, 0.493)'
    );
    root.style.setProperty('--theme-btn-color', 'white');
    root.style.setProperty('--theme-calculator', 'rgba(133, 115, 115, 0.164)');
    root.style.setProperty('--theme-display', 'rgba(0, 0, 0, 0.445)');
    root.style.setProperty('--theme-grid', 'rgba(0, 0, 0, 0.589)');
    root.style.setProperty('--theme-operation-buttons', 'rgba(0, 0, 0, 0.12)');
    root.style.setProperty('--theme-equals', 'rgba(0, 0, 0, 0.3)');
    root.style.setProperty('--theme-equals-hover', 'rgba(0, 0, 0, 0.45)');
    modeToggle = 'dark';
    console.log('dark');
  }
};

const wallpaper = document.getElementById('wallpaper');
let wallpaperToggle = 'gradient';
wallpaper.onclick = () => {
  if (wallpaperToggle === 'gradient') {
    document.body.style.backgroundImage = 'url(photos/bg.jpeg)';
    wallpaperToggle = 'image';
    console.log('image');
  } else {
    document.body.style.backgroundImage = '';
    wallpaperToggle = 'gradient';
    console.log('gradient');
  }
};

/* html display elements */
let history = document.getElementById('history-text');
let current = document.getElementById('current-text');

/* update display */
/*+ Number buttons */

document.addEventListener('click', (e) => {
  if (e.target.matches('.numButton')) {
    if (resetAfterEqual === 'true') {
      clear.onclick();
      resetAfterEqual = 'false';
      current.innerHTML += e.target.innerHTML;
      currentOperation += e.target.innerHTML;
    } else if (currentOperation.length < maxLength) {
      current.innerHTML += e.target.innerHTML;
      currentOperation += e.target.innerHTML;
    }
  }
});

/* other */
decimal.onclick = () => {
  if (resetAfterEqual === 'true') {
    clear.onclick();
    resetAfterEqual = 'false';
    current.innerHTML += '.';
    currentOperation += '.';
  } else if (
    !current.innerHTML.includes('.') &&
    currentOperation.length < maxLength - 1
  ) {
    current.innerHTML += '.';
    currentOperation += '.';
  }
};

clear.onclick = () => {
  current.innerHTML = '';
  history.innerHTML = '';
  currentOperation = '';
  oldNumber = 'not clear';
  usedEqual = '';
  lastOperator = '';
  resetAfterEqual = 'false';
};

/* check for operators already used */

let checkOperators = () => {
  if (
    !(whichOperator() === '+') &&
    !(whichOperator() === '-') &&
    !(whichOperator() === '*') &&
    !(whichOperator() === '/')
  ) {
    return true;
  } else {
    return false;
  }
};

// find which operator is being used
let whichOperator = () => {
  if (history.innerHTML.includes('+')) {
    lastOperator = '+';
  } else if (history.innerHTML.includes('-')) {
    lastOperator = '-';
  } else if (history.innerHTML.includes('*')) {
    lastOperator = '*';
  } else if (history.innerHTML.includes('/')) {
    lastOperator = '/';
  }
};

//! function to auto run right operation on any operation click
let rightOperation = () => {
  if (lastOperator === '-') {
    operate('-', subtract);
  } else if (lastOperator === '+') {
    operate('+', add);
  } else if (lastOperator === '*') {
    operate('*', multiply);
  } else if (lastOperator === '/') {
    operate('/', divide);
  }
};

//!operation buttons

document.addEventListener('click', (e) => {
  if (e.target.matches('.opButton')) {
    if (
      Number.isFinite(Number(current.innerHTML)) &&
      current.innerHTML !== ''
    ) {
      if (
        e.target.id === 'add' ||
        e.target.id === 'divide' ||
        e.target.id === 'multiply'
      ) {
        resetAfterEqual = 'false';
        console.log(e.target.dataset.type);
        operate(e.target.innerHTML, e.target.innerHTML);
        lastOperator = e.target.innerHTML;
      }
    }
  }
});

addBtn.onclick = function () {
  if (Number.isFinite(Number(current.innerHTML)) && current.innerHTML !== '') {
    resetAfterEqual = 'false';
    operate('+', add);
    lastOperator = '+';
  }
};

multiplyBtn.onclick = function () {
  if (Number.isFinite(Number(current.innerHTML)) && current.innerHTML !== '') {
    resetAfterEqual = 'false';
    operate('*', multiply);
    lastOperator = '*';
  }
};

divideBtn.onclick = function () {
  if (Number.isFinite(Number(current.innerHTML)) && current.innerHTML !== '') {
    resetAfterEqual = 'false';
    operate('/', divide);
    lastOperator = '/';
  }
};

subtractBtn.onclick = () => {
  if (
    (history.innerHTML === '' && current.innerHTML === '') ||
    (history.innerHTML.includes('+') && current.innerHTML === '') ||
    (history.innerHTML.includes('*') && current.innerHTML === '') ||
    (history.innerHTML.includes('/') && current.innerHTML === '') ||
    (history.innerHTML.includes('-') && current.innerHTML === '')
  ) {
    current.innerHTML += '-';
    currentOperation += '-';
  } else if (current.innerHTML === '-') {
    current.innerHTML = '';
    currentOperation = '';
  } else {
    resetAfterEqual = 'false';
    operate('-', subtract);
    lastOperator = '-';
  }
};

/* function to perform any operation */
let operate = function (sym, func) {
  if (
    !(lastOperator == sym) &&
    history.innerHTML != 'history' &&
    oldNumber != 'not clear'
  ) {
    rightOperation();
    history.innerHTML = oldNumber + ' ' + sym;
    console.log('finished original operation');
  } else if (
    (whichOperator() == sym && currentOperation != '') ||
    (!history.innerHTML == '' &&
      checkOperators() == true &&
      !current.innerHTML == '')
  ) {
    let result = func(oldNumber, currentOperation);
    oldNumber = result;
    currentOperation = '';
    current.innerHTML = '';
    history.innerHTML = oldNumber + ' ' + sym;
    usedEqual = oldNumber;
    console.log('used equal or same operator, or first operation');
  } else if (oldNumber == 'not clear') {
    oldNumber = currentOperation;
    history.innerHTML = currentOperation + ' ' + sym;
    currentOperation = '';
    current.innerHTML = '';
    console.log('force clear');
  } else if (history.innerHTML == '' && !current.innerHTML == '') {
    history.innerHTML = currentOperation + ' ' + sym;
    currentOperation = '';
    current.innerHTML = '';
    console.log('pressed operation after equal');
  }
};

/* equals */
equals.onclick = function () {
  if (history.innerHTML.includes('+')) {
    addBtn.onclick();
    history.innerHTML = '';
    current.innerHTML = usedEqual;
    currentOperation = usedEqual;
    resetAfterEqual = 'true';
  } else if (history.innerHTML.includes('-')) {
    subtractBtn.onclick();
    history.innerHTML = '';
    current.innerHTML = usedEqual;
    currentOperation = usedEqual;
    resetAfterEqual = 'true';
  } else if (history.innerHTML.includes('*')) {
    multiplyBtn.onclick();
    history.innerHTML = '';
    current.innerHTML = usedEqual;
    currentOperation = usedEqual;
    resetAfterEqual = 'true';
  } else if (history.innerHTML.includes('/')) {
    divideBtn.onclick();
    history.innerHTML = '';
    current.innerHTML = usedEqual;
    currentOperation = usedEqual;
    resetAfterEqual = 'true';
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
