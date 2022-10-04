/* const driver = 'Pedro';
const navigator = 'Bárbara';
const hacker1 = 'Elidiane';

 if (driver.localeCompare(navigator) === -1) {
  console.log("The driver's name goes first.");
} else if (driver.localeCompare(navigator) === 1) {
  console.log('Yo, the navigator goes first definitely.');
} else {
  console.log('What?! You both have the same name?');
}
 

if (driver.toLowerCase() < navigator.toLowercase()) {
  console.log("The driver's name goes first.");
} else if (driver.toLowerCase() > navigator.toLowerCase()) {
  console.log('Yo, the navigator goes first definitely.');
} else {
  console.log('What?! You both have the same name?');
}
 */

// Functions
// DRY - Don't repeat yourself
// KISS - Keep it simple stupid/sexy

//Function declaration
/* function functionName(parameters){
  //Action to perform
  return something;
} */

//Pure function
//placeholders
//parameters are specified when we declare a function
function sumTwoNumbers(num1, num2) {
  return num1 + num2;
}

//Arguments are specified when you invoke the function
result = sumTwoNumbers(10, 5);

console.log(result);

function sayName(name) {
  if (name.length === 0) {
    return 'No name was provided';
  }

  return `You're name is ${name}`;
}

let greetLucas = sayName('');

console.log(greetLucas);

//Store values in an object
function userProfile(name, campus, course) {
  const userInfo = {
    student: name,
    city: campus,
    bootcamp: course,
  };

  return userInfo;
}

let student1 = userProfile('Diana', 'Lisbon', 'WebDev');
let student2 = userProfile('Rita', 'Barcelona', 'UX/UI');
let student3 = userProfile('Zé', 'Amsterdam', 'Data');

/* console.log(student1);
console.log(student2);
console.log(student3); */

//Returning with arrays
function catchEm(poke1, poke2, poke3) {
  const team = [poke1, poke2, poke3];
  return team;
}

let camilaDex = catchEm('Bulbasaur', 'Eevee', 'Pikachu');
let andreaDex = catchEm('Squirtle', 'Psyduck', 'Mewtwo');

console.log(camilaDex, andreaDex);

//Object or Array?
//If you need to specify the type of information you have (like name, city, age, etc...) an object is better
//If all the info represents the same thing (just names, just cities, just pokemons), you can use arrays

let myAverageArray = [350, 560, 680, 10];
let myAverageArray2 = [350, 560, 680, 10, 1000];

//create a function called average or avg
//this function accepts an array as an argument
//the function returns the average of the array
//you should use a loop to sum all the numbers

function average(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    //[350, 560, 680, 10]
    sum += arr[i];
    // i = 0; sum + 350 = 350
    //i = 1; sum + 560 = 910
    //i = 2; sum + 680 = 1590
    //i = 3; sum + 10 = 1600
  }

  let avg = sum / arr.length;
  console.log(avg);
  return avg;
}

//average(myAverageArray);
//average(myAverageArray2);

//reusable code
//abstraction
//separation of concerns
// single responsibility

//refactoring
function sumAll(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function avg(arr) {
  let sum = sumAll(arr);
  let avg = sum / arr.length;
  console.log(avg);
  return avg;
}

//avg(myAverageArray);

//Array

let emptyArray = [];

let namesArray = ['André', 'Lucas', 'Diogo'];

let mixedArray = [true, 28, { name: 'André' }, []];

/* console.log(namesArray[1]);
console.log(namesArray.length); */

//Array methods
//push

namesArray.push('Xico');

//unshift

namesArray.unshift('Ricardo');

//pop

let lostName = namesArray.pop();
console.log(lostName);

//shift

namesArray.shift();

/* et splicedPart = namesArray.splice(0, 2);
console.log(splicedPart); */

/* console.log(namesArray);

for (let i = 0; i < namesArray.length; i++) {
  console.log(namesArray[i]);
} */

//create an array with 100 elements from 1, to 100
//You cannot use push

//let myArray = [1, 2, 3, 4 ... 100]

/* let myArray = [];

for (let i = 100; i > 0; i--) {
  myArray.unshift(i);
} */
let myArray = ['André'];
for (let i = 0; i <= 100; i++) {
  myArray[i] = i;
}

console.log(myArray);

//forEach

namesArray.forEach(function (element, index) {
  console.log(`${element} takes seat number ${index}`);
});

/* 
function printName(name){
  console.log(name);
}

namesArray.forEach(printName);
*/

//using arrow syntax
//namesArray.forEach((name) => console.log(name));

//console.log(namesArray);

let longString = 'How much wood would a woodchuck chuck if a woodchuck could chuck wood?';

let words = longString.split(' ');
console.log(words.length);

//console.lg();

function multiply(a, b) {
  let result = 0;
  result = a * b;
  return result;
}

multiply(2, 3);

function add(n1, n2) {
  return n1 + n2;
}

function makeCalculation(n1, n2, operation) {
  if (operation === 'sum') {
    return add(n1, n2);
  }
}

function init() {
  const result = makeCalculation(2, 3, 'sum');
  console.log(result);
}

init();

function powerOf3(num) {
  return num ** 3;
}

try {
  powerOf3(9);
} catch (error) {
  console.log('Error while executing powerof3 function');
  console.log(error);
}

function login(email, password) {
  if (!email || !password) {
    throw new Error('Incomplete data');
  }
}

try {
  login('a@b.com');
} catch (error) {
  console.log(error);
} finally {
  console.log('Someone tried to login');
}
