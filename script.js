// TODO: finish refactoring.

const calculator = document.querySelector(".calculatorContainer");
const keys = calculator.querySelector(".calculatorKeys");
const display = document.querySelector(".calculatorDisplay");

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    if (!action) {
      console.log("number key");
      if (displayedNum === "0" || previousKeyType === "operator") {
        display.textContent = keyContent;
        calculator.dataset.previousKeyType = "number";
      } else {
        display.textContent = displayedNum + keyContent;
      }
    }
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      if (firstValue && operator && previousKeyType !== "operator") {
        const calcVal = calculate(firstValue, operator, secondValue);
        display.textContent = calcVal;
        calculator.dataset.firstValue = calcVal;
      } else {
        calculator.dataset.firstValue = displayedNum;
      }

      key.classList.add("is-depressed");
      calculator.dataset.previousKeyType = "operator";
      calculator.dataset.operator = action;
      console.log("operator key");
    }
    if (action === "decimal") {
      if (!displayedNum.includes(".")) {
        display.textContent = displayedNum + ".";
      } else if (previousKeyType === "operator") {
        display.textContent = "0.";
      }
      console.log("decimal key");
      calculator.dataset.previousKeyType = "decimal";
    }
    if (action === "clear") {
      display.textContent = "0";
      calculator.dataset.previousKeyType = "clear";
      console.log("clear key");
    }
    if (action === "calculate") {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      if (firstValue) {
        if (previousKeyType === "calculate") {
          firstValue = displayedNum;
        }
        display.textContent = calculate(firstValue, operator, secondValue);
      }

      calculator.dataset.previousKeyType = "calculate";
      console.log("equal key");
    }

    Array.from(key.parentNode.children).forEach((k) =>
      k.classList.remove("is-depressed")
    );
  }
});

const calculate = (num1, operator, num2) => {
  let result = "";

  if (operator === "add") {
    return (result = parseFloat(num1) + parseFloat(num2));
  } else if (operator === "subtract") {
    return (result = parseFloat(num1) - parseFloat(num2));
  } else if (operator === "multiply") {
    return (result = parseFloat(num1) * parseFloat(num2));
  } else if (operator === "divide") {
    return (result = parseFloat(num1) / parseFloat(num2));
  }
};
