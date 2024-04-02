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


const calcAge = function(birthYear) {
  return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  
  if(retirement > 0) {
    console.log`${firstName} retires in ${retirement} years`;
    return retirement; //No code is executed after the return statements
  } else {
    console.log(`${firstName} has already retired 🎊`)  //console.log is also a function and another function call
    return -1;
  }

}

console.log(yearsUntilRetirement(1991, 'Jones'));
console.log(yearsUntilRetirement(1970, 'Mike'));


//Arrays
const friend1 = 'Micheal';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Micheal', 'Steven', 'Peter'];
console.log(friends);

const yars = new Array(1991, 1994, 2008, 2020);

console.log(friends[0]);// positions in the array
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]); //we can any expression not statements inside this literals bracket [] it doesnt has to be a number

friends[2] = 'Jay'; //To replace any position in the Array
console.log(friends);  //Only primitive values are immuteable (cannot be changed) an array is not a primative value, so it can always be changed
//friends = ['Bob', 'Alice']; // But what we cannot do is replace the entire array

const firstName = 'Jonas'//An array can hold values of differents types all at the same time
const jonas = [firstName, 'Schmedtamm', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge(years));
console.log(years);
console.log(years + 10); // + Operator converts it to a string becos with cannot really do operations with arrays
console.log(years - 10); // doesnt work either.

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


//Method Array
const friends = ['Micheal', 'Steven', 'Peter'];

//Add elements
const newLength = friends.push('Jay'); // Push method adds elements to the end of an array, push is a function.
console.log(friends);
console.log(newLength);

friends.unshift('John'); //Unshift method adds elements to the beginning of an array
console.log(friends);

//Remove Elements
friends.pop(); //Removes the last elements of an array
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //Removes the first elements of an array
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); //Elements that is not in the array

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));
console.log(friends.includes(23));

if (friends.includes('Peter'))  {
  console.log('You have a friend called Peter');
}
if (friends.includes('Steven'))  {
  console.log('You have a friend called Steven');
} 

//Object (Another Data Structure after Arrays), In objects we define key values.
const jonasArray = [  // Order matters when you want to retrieve dem 
  'Jonas', 
  'Schmedtamm', 
  2037 - 1991, 
  'teacher', 
  ['Micheal', 'Peter', 'Steven']
];

const jonas = {    //Jonas Object {} are the object literals, Order does not matter when u want to retrieve them
  firstName: 'Jonas',
  lastName: 'Schmedtamm',
  age: 2017 - 1991,
  job: 'teacher',
  friends: ['Micheal', 'Peter', 'Steven']
}
console.log(jonas);

console.log(jonas.lastName); //Dot notation 1st way of getting a Property from an object
console.log(jonas['lastName']); //You can put any expression inside the bracket notation

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

//console.log(jonas.'last' + nameKey); //It will not work with the dot notation, use real property name, not finite property name

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');
//console.log(interestedIn);
//console.log(jonas.interestedIn); //undefined is what we get when we try access a property or object that doesnt exist

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('wrong request! Choose between firstName, lastName, age, job and friends')
}


//Using both the dot. and the bracket notation to add new properties to objects
jonas.location = 'Portugal'
jonas['twitter'] ='@jonasschmedtman';
console.log(jonas);

//challenge
//'Jonas has 3 friends, and his best friend is called Micheal'
console.log('${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}');

// Objects can hold differents of data, including arrays and objects inside objects
//OBJECTS METHOD.  

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtamm',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Micheal', 'Peter', 'Steven'],
  hasDriversLicense: true,

  //calcAge: function (birthYear) {
   // return 2037 - birthYear;
  //}
  
  //const calcAge = function (birthYear) {  //Any function attached to an object is a method
   // return 2037 - birthYear;    //function values functions are values, methods are property that holds a function value
  //}

  //calcAge: function () {
   // console.log(this);
   // return 2037 - this.birthyear; //jonas.birthYear might work in place of this keyword but it will violate the Don't Repeat Yoursef rule
 // }
//};
 
calcAge: function () {
  this.age = 2037 - this.birthYear;
  return this.age;
},

getSummary: function () {
  return `${this.firstName} is a ${this.calcAge()} -year old ${jonas.job}, and he has ${this.hasDriversLicense ? 
  'a': 'no'} driver's license.`
}
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas['calcAge'(1991)]);


//Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummary());
*/


//Iteration: The For Loop (loop allows us to automate repetitive task, task we have to perform over and over again)
//console.log('Lifting weights repetition 1 🏋️‍♂️');
//console.log('Lifting weights repetition 2 🏋️‍♂️');
//console.log('Lifting weights repetition 3 🏋️‍♂️');
//console.log('Lifting weights repetition 4 🏋️‍♂️');
//console.log('Lifting weights repetition 5 🏋️‍♂️');
//console.log('Lifting weights repetition 6 🏋️‍♂️');
//console.log('Lifting weights repetition 7 🏋️‍♂️');
//console.log('Lifting weights repetition 8 🏋️‍♂️');
//console.log('Lifting weights repetition 9 🏋️‍♂️');
//console.log('Lifting weights repetition 10 🏋️‍♂️');

//For Loop (has 3 parts 1.intial value of a counter, 2. logical condition that is evaluated b4 each iteration of the loop codes are executed)
//for loop keeps running while condition is TRUE, rep stands for repetition
for(let rep = 1; rep <= 10; rep++) {  //(rep++ rep = rep + 1)
//for(let rep = 5; rep <= 10; rep++) {
//for(let rep = 1; rep <= 30; rep++) {
  //console.log('Lifting weights repetition 1 🏋️‍♂️');
  console.log('Lifting weights repetition ${rep} 🏋️‍♂️');
}

const jonas = [
  'Jonas', 
  'Schmedtamm', 
  2037 - 1991, 
  'teacher', 
  ['Micheal', 'Peter', 'Steven'],
  true
];

const types = [];

// console.log(jonas[0])
// console.log(jonas[1])
//...
// console.log(jonas[4])
//jonas[5] does NOT exist, i should stay below 5

//for(let i = 0; i < 5; i++) {
  //console.log(jonas[0]);
  //console.log(jonas[i]);
//}

for (let i = 0; i < jonas.length; i++) {
  //Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  // Filling types array
  //types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

//Continue and Break
console.log('----ONLY STRINGS---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log('----BREAK WITH NUMBER---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break;

  console.log(jonas[i], typeof jonas[i]);
}

