/*
// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM;
// We work for a company building a smart home thermometer. Our most recent task is this; "Given an array of temperatures of one day,
// Calculate the temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understand the problem by asking some questions.
// -- What is temp. amplitude? Answer - Its d difference btw the highest and the lowest tempera. in the array
// -- How do we compute max and min temperatures?
// -- What's a sensor error and What to do when it occurs? Answer - Ignore the sensor error 'error' and simply work with the rest of the data.   

// 2) Breaking up into sub-problems
// -- How to ignore errors?
// -- Find max value in temp array
// -- Find min value in temp array
// -- Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  // for(let i = 0; i < temps.length; i++) {
  //   if(temps[i] > max) max = temps[i];
  //   if(temps[i] > max) max = temps[i];
  // }
  
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

     if (curTemp > max) max = curTemp;
     if (curTemp < min) min = curTemp;
   }
  console.log(max, min);
  return max - min;
};
//calcTempAmplitude([3, 7, 4, 1, 8]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// We use google to find amplitude, We searched for "javascript get max value in an array"
// Stack Overflow is a site of question and answer, most of the time someone already asked the questions, so go there to get the response
// Usually the 1st or 2nd is the best solution but you scroll till you get the solution that you can implement we the tools that you already learnt

// PROBLEM 2;
// Functions should now receive 2 arrays of temps

// 1) Understanding the problem
// -- With 2 arrays, should we implement functionality twice?
// NO! Just merge two arrays

// 2) Breaking up into sub-problems
// --Merge 2 arrays?

const calcTempAmplitudeNew = function (t1, t2) {
  //const array1 = ['a', 'b', 'c'];
  //const array2 = ['d', 'e', 'f'];
  //const array3 = array1.concat(array2);

  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

     if (curTemp > max) max = curTemp;
     if (curTemp < min) min = curTemp;
   }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5,1], [9, 0, 5]);
console.log(amplitudeNew);


const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    //value: prompt('Degrees celsius:') 
    //value: Number(prompt('Degrees celsius:')), // to fix we convert to a number function
    value: 10,
  }

  //console.log(measurement); //The error is becos the prompt function always returns a string, no matter wat we input in the prompt window
  
  // B) FIND
  console.table(measurement); //Another way of showing objects in a console
  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;  // + operator when it sees a string, it will convert both sides of the operations to a string & then concatenate the strings.
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());

// HOW TO USE A DEBUGGER IN GOOGLE CHROME
// First go to sources on our chrome terminal and we choose the script file
// And we set a breaking point, by clicking the left bar a red dot apears showing the break point
// And when we reload the page den the excution will stop at exactly at the red point or break point
// meaning excuetion will freeze in time and show exactly what the excuetion will look like at that moment in time and that includes all the values of all the defined variables
// and then we can excute the rest of the function/script by hittin the step icon.

//Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    debugger;
     if (curTemp > max) max = curTemp;
     if (curTemp < min) min = curTemp;
   }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5,1], [9, 4, 5]);
// A) IDENTIFY
console.log(amplitudeBug);
*/


///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/


// 1) Understanding the problem by asking the right questions.
// - Array transformed to string, separated by ...
// - What is the X days? Answer:  current index of the array + 1 index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[2]}ºC ...`);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log('...' + str);
};
printForecast(data1);