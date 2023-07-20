function saySomething(value1, value2) {
  window.alert("The sum is " + add(value1 ,value2) + ".");
  window.alert("The difference is " + subtract(value1 ,value2) + ".");
  window.alert("The product is " + multiply(value1 ,value2) + ".");
  window.alert("The quotient is " + divide(value1 ,value2) + ".");
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