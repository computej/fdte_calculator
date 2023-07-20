function saySomething(whatToSay) {
  window.alert(whatToSay);
}

function add(number1, number2) {
  return number1 + number2;
}

const additionNumber1 = Number(window.prompt("Enter a number:"));
const additionNumber2 = Number(window.prompt("Enter another number:"));

saySomething("The sum is " + add(additionNumber1 ,additionNumber2) + ".");