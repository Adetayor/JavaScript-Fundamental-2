/*
'use strict'; // Strict Mode helps to write more secured code, makes it easier to avoid -
// accidental errors (avoid introduction of bugs) becos it forbid us from doing certain things and create visible errors for us otherwise Js fails silently without letting know.

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

//const interface = 'Audio';
//const private = 534;
//const if = 23;

//Functions
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
  //console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');


//function calcAge1(birthYear) {  //function declaration
    //const age = 2037 - birthYear;
    //return age;  //return is to take value out of the key word
//}
//fumction declaration
function calcAge1(birthYear) { //Parameter is a kind of placeholder in the function
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);  //Argument is the actual value that we use to fill the placeholder that is the parameter
console.log(age1);

//function expression
const calcAge2 = function (birthYear) { // function Expression Anonymous function is a function without a name which is stored with a varable 
    return 2037 - birthYear;            // The variable is the function
}                                       // function are also values in Javascript
const age2 = calcAge2(1991);

console.log(age1, age2);
// Differences btw Function declarations and Function Expressions, we can call function declaration before defining it in the code.
//const age1 = calcAge1(1991);
//function calcAge1(birthYear) {
 // return 2037 - birthYear;
//}
// Preferences determines the type of functions to use

//function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear; 
}

// Arrow function  -- do not get this keyword
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));


function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2,3));
*/

const calcAge = function(birthYear) {
  return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  
  if(retirement > 0) {
    return retirement;
    console.log`${firstName} retires in ${retirement} years`;
  } else {
    return -1;
    console.log(`${firstName} has already retired 🎊`)
  }

}

console.log(yearsUntilRetirement(1991, 'Jones'));
console.log(yearsUntilRetirement(1970, 'Mike'));