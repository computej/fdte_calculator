function saySomething(value1, value2) {

  const valueSum = add(value1,value2);
  const valueDifference = subtract(value1,value2);
  const valueProduct = multiply(value1,value2);
  const valueQuotient = divide(value1,value2);

  let alertMsg = String(value1).concat(" + ",value2," = ",valueSum,"\n");
  alertMsg += String(value1).concat(" - ",value2," = ",valueDifference,"\n");
  alertMsg += String(value1).concat(" * ",value2," = ",valueProduct,"\n");
  alertMsg += String(value1).concat(" / ",value2," = ",valueQuotient,"\n");

  window.alert(alertMsg);
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