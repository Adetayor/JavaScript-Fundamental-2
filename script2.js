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