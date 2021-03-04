// TODO: Find a way to take the value from numberButtonsPressed and find the result of the string
// also find a way to connect the keyboary keys to the buttons on screen. 

function numberButtonsPressed(buttons) {
  console.log(buttons);
  let display = document.getElementById("calculatorDisplay");
  // TODO: Use this to store the date VVVV
  let currentOperation = "";
  if (buttons == "oneButton") {
    display.value += 1;
  } else if (buttons == "twoButton") {
    display.value += 2;
  } else if (buttons == "threeButton") {
    display.value += 3;
  } else if (buttons == "fourButton") {
    display.value += 4;
  } else if (buttons == "fiveButton") {
    display.value += 5;
  } else if (buttons == "sixButton") {
    display.value += 6;
  } else if (buttons == "sevenButton") {
    display.value += 7;
  } else if (buttons == "eightButton") {
    display.value += 8;
  } else if (buttons == "nineButton") {
    display.value += 9;
  } else if (buttons == "zeroButton") {
    display.value += 0;
  } else if (buttons == "clearButton") {
    display.value = "";
  } else if (buttons == "plusButton" && display.value != "") {
    display.value += "+";
  } else if (buttons == "minusButton" && display.value != "") {
    display.value += "-";
  } else if (buttons == "divideButton" && display.value != "") {
    display.value += "/";
  } else if (buttons == "multiplyButton" && display.value != "") {
    display.value += "*";
  }
}

// clear the display
function clear() {}

function additionFunc(a, b) {
  return a + b;
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

function operateFunc(a, o, b) {
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
