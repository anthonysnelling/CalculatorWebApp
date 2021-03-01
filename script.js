// TODO: Add functionality for typing of buttons

//TODO: add ability to grab string from text field.


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
      return subtractionFunc(a,b);
  } else if(o == "*"){
      return multiplicationFunc(a,b);
  } else if(o == "/"){
      return divisionFunc(a,b);
  }
}
