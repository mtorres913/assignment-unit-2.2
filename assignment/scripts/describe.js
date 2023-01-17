// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// Make variable called name and we're setting it to Dane as a string
// then we check if name  equals Mary exactly and if it does, we console.log Hi Mary!
// otherwise if the name does not  equal Mary exactly, we console.log How do you do?
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Make a variable called secret with no set value. Make a variable called code and set it to 123.
// We check if code equals 123 exactly and if it does we set the variable secret to super and and set code to itself multiplied by 2.
// We then check if code is greater than 250 and if it does we set the variable secret to duper.
//We console.log(secret) Secret would be set to the value 'super' because code equals 123 exactly and is not greater than 250

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Make a variable isStudent and set its value to true. Make a variable age and set the value to 34. Make a variable zip and set the value to 55407.
// We check if isStudent is equal to 'true' exactly and that zip is greater than 80000 and it they are both true, we console.log 'You're a student on the West Coast!`
//If either is not true, then we check if isStudent is equal to 'false' exactly or if age is less than 30. If either is true, than we console.log 'What are your hobbies?' 
//If none are true, then we check if isStudent is equal to 'true' exactly. If it is true, then we console.log 'Welcome to Prime!'
//If it is not true, then we console.log 'How about the weather?' 

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

// FIX - colorOne is set to 'red' and not 'blue' as in the description. colorTwo is set to 'blue' and not 'red' as in the description.
//Only colorOne is set to purple in the conditional and not colorTwo as in the description.

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

//FIX - Time is set as a constant and not a variable as in the description. The conditional is checking if temp is higher than 39 OR (||) if time is greater or equal to  4
// instead of AND (&&) as in the description
/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

//FIX - minAge is set as a constant and not a variable as in the description.  When age checked if it is greater than or equal to minAge, there is a console.log of
// no entry. There is no console.log of no entry in the description.
/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

