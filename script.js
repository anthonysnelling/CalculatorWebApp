// TODO: find a way to carry over a previous operator when string multiple operators
// add a . button
// think about changing the text field into a regular html element and use document.write to write the values in.

let currentOperation = "";
let operationsList = [];
let firstVar = "";
let secondVar = "";
let fromEquals = false;
let result = "";
let phase = 0;
let opCount = 0;
let currentNum = "";
let display = document.getElementById("calculatorDisplay");
let clearedState = false;
document.addEventListener("keypress", (e) => numberButtonsPressed(e.key));

function numberButtonsPressed(buttons) {
  // console.log(buttons);
  if (buttons == "oneButton" || buttons == "1") {
    currentNum += 1;
    display.value += 1;
    if (clearedState) {
      activateClear(1);
    }
  } else if (buttons == "twoButton" || buttons == "2") {
    currentNum += 2;
    display.value += 2;
    if (clearedState) {
      activateClear(2);
    }
  } else if (buttons == "threeButton" || buttons == "3") {
    currentNum += 3;
    display.value += 3;
    if (clearedState) {
      activateClear(3);
    }
  } else if (buttons == "fourButton" || buttons == "4") {
    currentNum += 4;
    display.value += 4;
    if (clearedState) {
      activateClear(4);
    }
  } else if (buttons == "fiveButton" || buttons == "5") {
    currentNum += 5;
    display.value += 5;
    if (clearedState) {
      activateClear(5);
    }
  } else if (buttons == "sixButton" || buttons == "6") {
    currentNum += 6;
    display.value += 6;
    if (clearedState) {
      activateClear(6);
    }
  } else if (buttons == "sevenButton" || buttons == "7") {
    currentNum += 7;
    display.value += 7;
    if (clearedState) {
      activateClear(7);
    }
  } else if (buttons == "eightButton" || buttons == "8") {
    currentNum += 8;
    display.value += 8;
    if (clearedState) {
      activateClear(8);
    }
  } else if (buttons == "nineButton" || buttons == "9") {
    currentNum += 9;
    display.value += 9;
    if (clearedState) {
      activateClear(9);
    }
  } else if (buttons == "zeroButton" || buttons == "0") {
    currentNum += 0;
    display.value += 0;
    if (clearedState) {
      activateClear(0);
    }
  } else if (buttons == "clearButton" || buttons == "c") {
    clearDisplay();
  } else if (buttons == "plusButton" || buttons == "+") {
    currentOperation = "+";
    operationsList.push(currentOperation);
    if (currentNum != "") {
      fromEquals = false;
      operateFunc(currentOperation);
    }
  } else if (buttons == "minusButton" || buttons == "-") {
    currentOperation = "-";
    operationsList.push(currentOperation);
    if (currentNum != "") {
      fromEquals = false;
      operateFunc(currentOperation);
    }
  } else if (buttons == "divideButton" || buttons == "/") {
    currentOperation = "/";
    operationsList.push(currentOperation);
    if (currentNum != "") {
      fromEquals = false;
      operateFunc(currentOperation);
    }
  } else if (buttons == "multiplyButton" || buttons == "*") {
    currentOperation = "*";
    operationsList.push(currentOperation);
    if (currentNum != "") {
      fromEquals = false;
      operateFunc(currentOperation);
    }
  } else if (buttons == "equalsButton" || "Enter") {
    if (currentNum != "") {
      fromEquals = true;
      operateFunc(currentOperation);
    }
  }
}

function additionFunc(op1, op2) {
  return parseFloat(op1) + parseFloat(op2);
}

function subtractionFunc(op1, op2) {
  return parseFloat(op1) - parseFloat(op2);
}

function divisionFunc(op1, op2) {
  return parseFloat(op1) / parseFloat(op2);
}

function multiplicationFunc(op1, op2) {
  return parseFloat(op1) * parseFloat(op2);
}

function operateFunc(operation) {
  console.log(preOperation);
  console.log("phase: " + phase);
  console.log("currentNum: " + currentNum);
  if (phase == 0) {
    firstVar = currentNum;
    clearedState = true;
    currentNum = "";
    phase++;
  } else if (phase == 1) {
    secondVar = currentNum;

    if (operation == "+") {
      result = additionFunc(firstVar, secondVar);
      display.value = result;
      firstVar = result;
      secondVar = "";
      currentNum = "";
      phase++;
      clearedState = true;
    } else if (operation == "-") {
      result = subtractionFunc(firstVar, secondVar);
      display.value = result;
      firstVar = result;
      secondVar = "";
      currentNum = "";
      phase++;
      clearedState = true;
    } else if (operation == "/") {
      result = divisionFunc(firstVar, secondVar);
      display.value = result;
      firstVar = result;
      secondVar = "";
      currentNum = "";
      phase++;
      clearedState = true;
    } else if (operation == "*") {
      result = multiplicationFunc(firstVar, secondVar);
      display.value = result;
      firstVar = result;
      secondVar = "";
      currentNum = "";
      phase++;
      clearedState = true;
    }
  } else if (phase == 2 && fromEquals == true) {
    if (operation == "+") {
      firstVar = result;
      secondVar = currentNum;
      result = additionFunc(firstVar, secondVar);
      display.value = result;
      secondVar = "";
      currentNum = "";
      phase = 2;
      clearedState = true;
    } else if (operation == "-") {
      firstVar = result;
      secondVar = currentNum;
      result = subtractionFunc(firstVar, secondVar);
      display.value = result;
      secondVar = "";
      currentNum = "";
      phase = 2;
      clearedState = true;
    } else if (operation == "/") {
      firstVar = result;
      secondVar = currentNum;
      result = divisionFunc(firstVar, secondVar);
      display.value = result;
      secondVar = "";
      currentNum = "";
      phase = 2;
      clearedState = true;
    } else if (operation == "*") {
      firstVar = result;
      secondVar = currentNum;
      result = multiplicationFunc(firstVar, secondVar);
      display.value = result;
      secondVar = "";
      currentNum = "";
      phase = 2;
      clearedState = true;
    }
  } else if (phase == 2 && fromEquals == false) {
    if (operation == "+") {
      firstVar = result;
      secondVar = currentNum;
      result = additionFunc(firstVar, secondVar);
      display.value = result;
      secondVar = "";
      currentNum = "";
      phase = 2;
      clearedState = true;
    } else if (operation == "-") {
      firstVar = result;
      secondVar = currentNum;
      result = subtractionFunc(firstVar, secondVar);
      display.value = result;
      secondVar = "";
      currentNum = "";
      phase = 2;
      clearedState = true;
    } else if (operation == "/") {
      firstVar = result;
      secondVar = currentNum;
      result = divisionFunc(firstVar, secondVar);
      display.value = result;
      secondVar = "";
      currentNum = "";
      phase = 2;
      clearedState = true;
    } else if (operation == "*") {
      firstVar = result;
      secondVar = currentNum;
      result = multiplicationFunc(firstVar, secondVar);
      display.value = result;
      secondVar = "";
      currentNum = "";
      phase = 2;
      clearedState = true;
    }
  }
  if (operationsList.length > 2) {
    console.log(operationsList[0]);
    operationsList.shift();
  }
}

function clearDisplay() {
  display.value = "";
  firstVar = "";
  secondVar = "";
  result = "";
  phase = 0;
  operationsList = [];
  currentOperation = "";
  currentNum = "";
  console.log("Cleared!");
}

// clears the display between operations
function activateClear(num) {
  display.value = num;
  clearedState = false;
}
