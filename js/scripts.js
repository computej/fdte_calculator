function saySomething(value1, value2) {

  const valueSum = add(value1,value2);
  const valueDifference = subtract(value1,value2);
  const valueProduct = multiply(value1,value2);
  const valueQuotient = divide(value1,value2);

  window.alert("The sum is ".concat(valueSum,".\n") + "The difference is ".concat(valueDifference,".\n") + "The product is ".concat(valueProduct, ".\n") + "The quotient is ".concat(valueQuotient, "."));
}

function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1,number2) {
  return number1 - number2;
}

function multiply(number1,number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

const additionNumber1 = Number(window.prompt("Enter a number:"));
const additionNumber2 = Number(window.prompt("Enter another number:"));

saySomething(additionNumber1, additionNumber2);