// TODO: Find a way to take the value from numberButtonsPressed and find the result of the string
// also find a way to connect the keyboard keys to the buttons on screen.

let currentOperation = "";
let firstVar = "";
let secondVar = "";
let thirdVarInput = "";
let result = "";
let display = document.getElementById("calculatorDisplay");
document.addEventListener("keypress", (e) => numberButtonsPressed(e.key));

function numberButtonsPressed(buttons) {
  console.log(buttons);

  if (currentOperation == "clearIT") {
    display.value = "";
    currentOperation = "";
  }

  if (firstVar != "" && secondVar != "") {
    result = operateFunc(firstVar, currentOperation, secondVar);
    firstVar = result;
    secondVar = "";
    display.value = result;
    thirdVarInput == true;
  }

  if (buttons == "oneButton" || buttons == "1") {
    display.value += 1;
  } else if (buttons == "twoButton" || buttons == "2") {
    display.value += 2;
  } else if (buttons == "threeButton" || buttons == "3") {
    display.value += 3;
  } else if (buttons == "fourButton" || buttons == "4") {
    display.value += 4;
  } else if (buttons == "fiveButton" || buttons == "5") {
    display.value += 5;
  } else if (buttons == "sixButton" || buttons == "6") {
    display.value += 6;
  } else if (buttons == "sevenButton" || buttons == "7") {
    display.value += 7;
  } else if (buttons == "eightButton" || buttons == "8") {
    display.value += 8;
  } else if (buttons == "nineButton" || buttons == "9") {
    display.value += 9;
  } else if (buttons == "zeroButton" || buttons == "0") {
    display.value += 0;
  } else if (buttons == "clearButton" || buttons == "c") {
    display.value = "";
    firstVar = "";
    secondVar = "";
    thirdVarInput = "";
  } else if (buttons == "plusButton" || buttons == "+") {
    additionFunc(firstVar, secondVar);
  } else if (buttons == "minusButton" && display.value != "") {
    subtractionFunc(firstVar, secondVar);
  } else if (buttons == "divideButton" && display.value != "/") {
    divisionFunc(firstVar, secondVar);
  } else if (buttons == "multiplyButton" && display.value != "*") {
    multiplicationFunc(firstVar, secondVar);
  } else if (buttons == "equalsButton" || "Enter") {
    operateFunc(currentOperation);
  }
}

function additionFunc(a, b) {
  currentOperation = "+";
  if (a == "" && b == "") {
    firstVar = display.value;
    display.value = "";
  } else if (a != "" && b == "") {
    secondVar = display.value;
    result = parseFloat(firstVar) + parseFloat(secondVar);
    firstVar = result;
    secondVar = "";
    display.value = result;
  } else if (a != "" && b != "") {
    result = a + b;
    display.value = result;
  }
}

function subtractionFunc(a, b) {
  return a - b;
}

function multiplicationFunc(a, b) {
  return a * b;
}

function divisionFunc(a, b) {
  return a / b;
}

function operateFunc(o) {
  if (o == "+") {
    return additionFunc(a, b);
  } else if (o == "-") {
    return subtractionFunc(a, b);
  } else if (o == "*") {
    return multiplicationFunc(a, b);
  } else if (o == "/") {
    return divisionFunc(a, b);
  }
}
