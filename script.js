// TODO: finish refactoring.

const calculator = document.querySelector(".calculatorContainer");
const keys = calculator.querySelector(".calculatorKeys");
const display = document.querySelector(".calculatorDisplay")

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
      }else {
        display.textContent = displayedNum + keyContent;
      }
    }
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      key.classList.add("is-depressed");
      calculator.dataset.previousKeyType = "operator";
      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;
      console.log("operator key");
    }
    if (action === "decimal") {
      if (action === "decimal") {
        display.textContent = displayedNum + ".";
      }
      console.log("decimal key");
    }
    if (action === "clear") {
      console.log("clear key");
    }
    if (action === "calculate") {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      display.textContent = caclulate(firstValue, operator, secondValue);
      console.log("equal key");
    }

    Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))
  }
});
