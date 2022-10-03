//Javascript
// 3 pillars of the web
// lightweight, interpreted, first-class functions
//Ecmascript

// Single-line comment
/*
Multi
Line
Comment
*/

var name = 'Lucas';

//let, const

//Declaration

let welcome;
let a, b, c;

// initialization

welcome = 'Hello there';
a = 2;
a = 3;
a = 4;

//declaration and initialization

let myNameIs = 'André';

console.log(myNameIs);

//let - assign new values

const ourPlanet = 'Earth';

//ourPlanet = 'Mars';

//You cannot just declare a variable with const
/* const city;

city = "Lisbon" */

//Data types

//Primitive Values
// String
// Number
// Boolean
// undefined
// null
// symbol (es6)

// Non- primitives
// Array
// Object

let age = 28;

age = age - 2;

console.log(age);
console.log(28);

// Primitive values can never be changed, BUT you can assign new values to a variable
let city = 'Lisbon';
city = 'Barcelona';
city = 'Tarcelona';

city[0] = 'T';

console.log(city);

//Numbers

let myAge = 28;
let price = 10.99;

let result = myAge / myNameIs;
console.log(result);

// Operations
// +
// -
// /
// *
// **
// %

let myResult = 2 + 2;

console.log(myResult);

myResult = myResult + 2;

console.log(myResult);

myResult += 2;

console.log(myResult);

myResult *= 10;
console.log(myResult);

console.log(2 ** 3);
console.log(11 % 10);
console.log(myAge % 2 === 0);

//String

let firstName = 'Lucas';
let lastName = 'Zaquine';
//let middleName = `Digimon`

//Concatenation
let message = 'Hello' + ' ' + firstName + ' ' + lastName;

//console.log(message);

//Interpolation
let interpolatedMessage = `Hello ${firstName} ${lastName}`;
//console.log(interpolatedMessage);

//Escaping a character
//let newMessage = 'Let\'s code';

/* console.log(message.length);
console.log(message[19]); */

// String methods

//charAt

console.log(message.charAt(10));

let repeated = "It's this and not this";
// indexOf
console.log(message);
console.log(message.indexOf('l', 4));
console.log(repeated.lastIndexOf('this'));

//repeat

console.log('ah'.repeat(3));
console.log('alright '.repeat(7));

let howdy = 'Hey there, how are you?';

//substring, slice

console.log(howdy.substring(0, 3));
console.log(howdy.slice(0, 3));
console.log(howdy.slice(-3, 0));

//localeCompare

console.log('age'.localeCompare('bonus'));
console.log('age'.localeCompare('age'));
console.log('bonus'.localeCompare('age'));
console.log('Age'.localeCompare('age'));

console.log(firstName.toLowerCase().localeCompare(lastName.toLowerCase()));

let poem = 'To be or not to be, that is the question';

// startsWith
console.log(poem.startsWith('to'));

//endsWith
console.log(poem.endsWith('question', 19));

//includes
console.log(poem.includes('be'));
console.log(poem.includes(' '));
console.log(poem.includes('To', 1));

//Number methods

let product = 10.5;

//Math.ceil
console.log(Math.ceil(product));

//Math.floor
console.log(Math.floor(product));

//Math.round
console.log(Math.round(product));

//Math.random from 0 (inclusive) to 1 (exclude)

console.log(Math.random());
console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1);

let anyNumber = 3.56789876;

//toFixed
console.log(typeof anyNumber.toFixed(2));

//anyNumber = anyNumber.toFixed(2);

console.log(anyNumber + 3);
//console.log('3.57' + 3);

console.log(2 + 2 + '2' + (2 + 2) + '2');
//4222
//22222

console.log(typeof Number(anyNumber.toFixed(2)));

let roundToOne = Math.round(anyNumber * 10) / 10;
let roundToTwo = Math.round(anyNumber * 100) / 100;
console.log(roundToOne);
console.log(roundToTwo);

console.log(0.1 + 0.2);

// Math.min Math.max

console.log(Math.max(15678, 7, 89, 9876));
console.log(Math.min(15678, 7, 89, 9876));

console.log(Math.pow(2, 3));

//Boolean

let bool1 = true;
let bool2 = false;

// Operators
// OR ||

/* console.log(true || true);
console.log(true || false);
console.log(false || false || false || false || false || false || false);
console.log(false || 10 > 1); */

// AND &&

console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(true && 10 < 1);

let loggedIn = false;
//short-circuit
console.log(loggedIn && true);
console.log(true || false);

//undefined
//let pokemon;
//console.log(pokemon);
console.log(firstName[10]);

//null

let favouritePokemon = null;

// Truthy and Falsy values

if (true && '0' && 1 && [] && {}) {
  console.log('these are truthy');
}

//NOT operator
if (!(false && 0 && '' && null && undefined && NaN)) {
  console.log('these are all falsy');
}

//Conditionals

let userAge = 35;

if (userAge < 18) {
  console.log('You get a junior discount');
} else if (userAge > 65) {
  console.log('You get a senior discount');
} else {
  console.log("You don't get a discount");
}

//Switch

const pokemon = 'Totodile';
let type = ' ';

switch (pokemon) {
  case 'Pikachu':
    type = 'Electric';
    break;
  case 'Bulbasaur':
    type = 'Grass';
    break;
  case 'Squirtle':
  case 'Totodile':
  case 'Mudkip':
    type = 'Water';
    break;
  case 'Eevee':
    type = 'Normal';
    break;
  case 'Charizard':
    type = 'Fire';
    break;
  default:
    type = 'unknown';
}

console.log(`${pokemon} is of type ${type}`);

//Loops

//Do while

/* let count = 0;

while (count < 10) {
  console.log(count);
  count++;
} */

/* do {
  count += 1;
  console.log(count);
} while (count >= 10); */

// Loop from 0 to 30
//console.log count
// BUT on 10, 20, and 30 console.log "ten", "twenty", "thirty"

/* let count = 0;

while (count <= 30) {
  if (count === 10) {
    console.log('ten');
  } else if (count === 20) {
    console.log('twenty');
  } else if (count === 30) {
    console.log('thirty');
  } else {
    console.log(count);
  }

  count++;
} */

//for loop

/* for (initialization; condition; finalExpression){
 action to perform
} */

/* for (let i = 0; i <= 30; i++) {
  console.log(i);
} */

//using a for loop console.log from 100 to 0

/* for (let i = 100; i >= 0; i--) {
  console.log(i);
} */

//for of
//Only for iterable values - strings and arrays

/* let campus = 'Ironhack Lisbon';

for (const character of campus) {
  console.log(character);
} */

//Continue & break

//let newCount = 0;

/* while (newCount < 10) {
  console.log(newCount);
  newCount++;
  if (newCount === 3) {
    break;
  }
} */

// continue

/* while (newCount < 10) {
  newCount++;

  if (newCount === 5) {
    continue;
  }

  console.log(newCount);
} */

//loop from 0 to 20 (inclusive)
//console.log "x is even" or "x is odd"
//0 is even
//1 is odd
//2 is even
// ...

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

//DVCS
//Distributed Version Control System
