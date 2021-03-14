// TODO: change all to call operateFunc for all results.
// fix the bugs. implement for other operations
// perform the first calculation on the first two vars
// after the first calculation perform the following calculations with a result variable
// and continue to do so until boolean variable is set to false after a clear is hit.
// finish other calc functions.
// think about changing the text field into a regular html element and use document.write to write the values in. 

let currentOperation = "";
let firstVar = "";
let secondVar = "";
let clearedState = "";
let result = "";
let firstCalc = true;
let display = document.getElementById("calculatorDisplay");
document.addEventListener("keypress", (e) => numberButtonsPressed(e.key));

function numberButtonsPressed(buttons) {
  // console.log(buttons);

  if (clearedState == "clearIT") {
    display.value = "";
    currentOperation = "";
    clearedState == "";
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
    result = "";
    clearedState = "";
    firstCalc = true;
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


// TODO: add an if else tree to determine if firstCalc == true
// if true perform the operation of first and secondVar
// if false perform it on result and second var. 
function additionFunc(a, b) {
  currentOperation = "+";
  if (a == "" && b == "") {
    firstVar = display.value;
    display.value = "";
    console.log("First Sec");
  } else if (a != "" && b == "" && opsCounter == 0) {
    secondVar = display.value;
    result = parseFloat(firstVar) + parseFloat(secondVar);
    firstVar = result;
    secondVar = "";
    display.value = result;
    clearedState = "clearIT";
    opsCounter++;
    console.log("second Sec");
  } else if (a != "" && b == "" && opsCounter != 0) {
    display.value = result;
    firstVar = result;
    secondVar = "";
    opsCounter = 0;
    console.log("third sec");
  }
  // console.log(firstVar);
  // console.log(secondVar);
  // console.log(result);
  // console.log(currentOperation);
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
    secondVar = display.value;
    result = parseFloat(firstVar) + parseFloat(secondVar);
    display.value = result;
    firstVar = result;
    secondVar = "";
    currentOperation = "";
    firstCalc = false;
    clearedState = "clearIT";
  } else if (o == "-") {
    return subtractionFunc(a, b);
  } else if (o == "*") {
    return multiplicationFunc(a, b);
  } else if (o == "/") {
    return divisionFunc(a, b);
  }
}
