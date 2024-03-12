'use strict'; // Strict Mode helps to write more secured code, makes it easier to avoid -
// accidental errors (avoid introduction of bugs) becos it forbid us from doing certain things and create visible errors for us otherwise Js fails silently without letting know.

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

//const interface = 'Audio';
//const private = 534;
//const if = 23;

//Function is a piece of code that we can reuse over and over again in our code, function is like variable
//variable holds value but a function holds a complete line of code or more.
function logger() {
  console.log('My name is Tayo'); //function body
}

//calling / naming / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');