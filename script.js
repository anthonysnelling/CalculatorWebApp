// TODO: addition function
function additionFunc(a, b) {
  return a + b;
}

// TODO: subtraction function
function subtractionFunc(a, b) {
  return a - b;
}

// TODO: multiplication function
function multiplicationFunc(a, b) {
  return a * b;
}

// TODO: division function
function divisionFunc(a, b) {
  return a / b;
}

// TODO: operate function, takes an operator & 2 numbers then calls one of the above functions on the numbers.
function operateFunc(a, o, b) {
  if (o == "+") {
    return additionFunc(a, b);
  } else if (o == "-") {
      return subtractionFunc(a,b);
  } else if(o == "*"){
      return multiplicationFunc(a,b);
  } else if(o == "/"){
      return divisionFunc(a,b);
  }
}
