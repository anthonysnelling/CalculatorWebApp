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
let result = "";
let phase = 0;
let display = document.getElementById("calculatorDisplay");
let clearedState = false;
document.addEventListener("keypress", (e) => numberButtonsPressed(e.key));

function numberButtonsPressed(buttons) {
  // console.log(buttons);
  if (buttons == "oneButton" || buttons == "1") {
    display.value += 1;
    if (clearedState) {
      activateClear(1);
    }
  } else if (buttons == "twoButton" || buttons == "2") {
    display.value += 2;
    if (clearedState) {
      activateClear(2);
    }
  } else if (buttons == "threeButton" || buttons == "3") {
    display.value += 3;
    if (clearedState) {
      activateClear(3);
    }
  } else if (buttons == "fourButton" || buttons == "4") {
    display.value += 4;
    if (clearedState) {
      activateClear(4);
    }
  } else if (buttons == "fiveButton" || buttons == "5") {
    display.value += 5;
    if (clearedState) {
      activateClear(5);
    }
  } else if (buttons == "sixButton" || buttons == "6") {
    display.value += 6;
    if (clearedState) {
      activateClear(6);
    }
  } else if (buttons == "sevenButton" || buttons == "7") {
    display.value += 7;
    if (clearedState) {
      activateClear(7);
    }
  } else if (buttons == "eightButton" || buttons == "8") {
    display.value += 8;
    if (clearedState) {
      activateClear(8);
    }
  } else if (buttons == "nineButton" || buttons == "9") {
    display.value += 9;
    if (clearedState) {
      activateClear(9);
    }
  } else if (buttons == "zeroButton" || buttons == "0") {
    display.value += 0;
    if (clearedState) {
      activateClear(0);
    }
  } else if (buttons == "clearButton" || buttons == "c") {
    clearDisplay();
  } else if (buttons == "plusButton" || buttons == "+") {
    if (phase == 0) {
      firstVar = display.value;
      currentOperation = "+";
      phase = 1;
      clearedState = true;
    } else if (phase == 1) {
      secondVar = display.value;
      currentOperation = "+";
      operateFunc(firstVar, secondVar, currentOperation);
      phase = 2;
      secondVar = "";
      clearedState = true;
    } else if (phase == 2) {
      secondVar = display.value;
      phase = 1;
    }
  } else if (buttons == "minusButton" && display.value != "") {
    subtractionFunc();
  } else if (buttons == "divideButton" && display.value != "/") {
    divisionFunc();
  } else if (buttons == "multiplyButton" && display.value != "*") {
    multiplicationFunc();
  } else if (buttons == "equalsButton" || "Enter") {
    operateFunc(firstVar, secondVar, currentOperation);
  }
}

function clearDisplay() {
  display.value = "";
  firstVar = "";
  secondVar = "";
  result = "";
  phase = 0;
  console.log("Cleared!");
}

// clears the display between operations
function activateClear(num) {
  display.value = num;
  clearedState = false;
}

function operateFunc(firstNum, secondNum, o) {
  // console.log("= was hit!")
  console.log(firstNum);
  console.log(secondNum);
  console.log(o);
  if (phase < 1) {
    return;
  } else if (phase == 1) {
    if (o == "+") {
      secondVar = display.value;
      result = parseFloat(firstVar) + parseFloat(secondVar);
      display.value = result;
      firstVar = result;
      secondVar = "";
      // phase = 2;
    } else if (o == "-") {
      return subtractionFunc(a, b);
    } else if (o == "*") {
      return multiplicationFunc(a, b);
    } else if (o == "/") {
      return divisionFunc(a, b);
    }
  }
  clearedState = true;
}
