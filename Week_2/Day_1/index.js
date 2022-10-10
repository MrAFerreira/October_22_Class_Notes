// Scope
var aloha;
// Global scope - Accessible everywhere

let myName = 'André';

// Function scope - Accessible inside a function and it's children

function sum(a, b) {
  let result = a + b;
  //Inside the function we still have access to the global scope
  //console.log(myName);
  //And also the function scope
  //console.log(result);
  return result;
}

function subtract(a, b) {
  //This result is completely different from the one in the function sum
  let result = a - b;
  //console.log(result);
}
//Outside the function we don't have access to it's scope
//console.log(result);

sum(2, 3);

//Block Scope  - Accessible only in that specific block {} (of statements/for loops)

if (10 > 1) {
  let myScope = 'Block scope';
  //console.log(myScope);
}
//console.log(myScope);

//var
//jusy like let and const, is available on the scope it was declared
var message = 'Hello from the global scope';

function localScope() {
  var greeting = 'Hello from function scope';
  return greeting;
}

//console.log(message);
//console.log(greeting);

// with let we can reassign a new value
myName = 'Lucas';

// var can be redeclared
var message = "New message, and it's okay";

console.log(message);

//when declaring a for loop, var doesn't count the parenthesis as a block scope, which means it's available globally
/* for (var i = 0; i < 30; i++) {
  console.log(i);
}

console.log('Drum roll please:', i); */

//let

//with let with don't have this problem
/* for (let i = 0; i < 30; i++) {

  console.log(i);
}

console.log('Drum roll please:', i); */

//let can be reassigned but not redeclare them

let pm = 'Diogo';
//this is okay
pm = 'Rita';
//this is not
// let pm = "Rita"

// const

const myObject = { keyboard: 10.99 };
const cohort = 'October 2022';
//Impossible to reassign
//cohort = 'January 2023';
//Cannot just declare empty variable
//const city;

//reassigning is not possible
//myObject = { keyboard: 10.99, chair: 20 };
//in the case of objects and arrrays we can change the content
//myObject.chair = 20;

//console.log(myObject);

// Hoisting
// "Transporting" a variable/function to the top of the code

//let and const thecnically get hoisted but not initialized
//console.log(howdy);
let howdy = 'Hello there';

//var gets hoisted BUT initialized with a value of undefined

//console.log(aloha);
var aloha = 'Aloha there';
//console.log(aloha);

//Shadowing
// We CAN (but we probably shouldn't) use the same names in different scopes

/* let name = 'Natália';

if (true) {
  //This is not redeclaring the original name variable
  //In different scopes we can use the same name
  let name = 'André';
  console.log('Inside if:', name);
}

console.log('Outside if:', name); */

let a = 1;
let b = 2;

function inner() {
  //here we are accessing the a in the global scope
  a = 4;
  //here we're creating a variable with the same name - shadowing
  let b = 3;
  console.log(b);
}
//first a in the global scope
console.log(a); // 1
//when we run the function we trigger console.log for b BUT it's the b inside the function scope
inner(); //3
//a was given a new value because we ran the function
console.log(a); // 4
//this b is the one from the global scope
console.log(b); // 2

// Value vs reference & Mutable data types

// Primitive values
let price1 = 20.99;
let price2 = 20.99;

//console.log(price1 === price2);

let lucasFavePokemon = 'Pikachu';
let diogoFavePokemon = 'Pikachu';

//console.log(lucasFavePokemon === diogoFavePokemon);

//Reference values

const book1 = {
  author: 'J.R.R. Tolkien',
};

//this doesn't create a copy of the object, it links to the same object in memory
const book2 = book1;

/* console.log(book1);
console.log(book2); */

book1.author = 'Jane Austen';

/* console.log(book1);
console.log(book2); */

book2.author = 'Herman Mellvile';

/* console.log(book1);
console.log(book2); */

//When declaring variables if we use the value of an existing variable we're NOT creating a linlk between the two
/* let num1 = 4;
let num2 = num1;

num1 = 10;
console.log(num1);
console.log(num2);

num2 = num1;

console.log(num1);
console.log(num2); */

//Same thing with arrays
const students = ['Hugo', 'Bárbara', 'Elidiane', 'Camila' /* id: 3 */];
const secondRow = ['Hugo', 'Bárbara', 'Elidiane', 'Camila' /* id: 3435 */];

let row = students;

//this is true because they're pointing to the same array
console.log(students === row);
//This is false because even though it looks the same, it isn't
console.log(students === secondRow);

/* console.log(students);
console.log(row); */

students.push('Ricardo');
//this push only affects the array represented by students and row

/* console.log(students);
console.log(row);
console.log(secondRow);
 */

//Copying an object

const favBook = {
  title: 'Lord of the rings',
  publishers: [
    { company: 'Penguin books' },
    {
      company: 'Don Quixote',
    },
  ],
};

//JSON.parse // JSON.stringify

//stringify transforms into a string
let stringedBook = JSON.stringify(favBook);
//console.log(stringedBook);

//parse reads the string and transforms it into an object
let parsedBook = JSON.parse(stringedBook);
//console.log(parsedBook);

//in one line
let bookCopy = JSON.parse(JSON.stringify(favBook));
//changing the original doesn't change the copies
favBook.title = '1984';

//console.log(bookCopy);

//Copying an array

const ironhackers = ['Rafa', 'Raiza', 'Andrea', 'Mário', 'Juliana'];

//using splice
const ironSlice = ironhackers.slice();
ironSlice.pop();

//using spread
const ironSpread = [...ironhackers];

ironhackers.push('Diogo');

/* console.log(ironhackers); //Diogo was here
console.log(ironSlice);
console.log(ironSpread); */

const pokedex = [
  ['Charmander', 'Cyndaquil', 'Torchic'],
  ['Squirtle', 'Totodile', 'Mudkip'],
  ['Bulbasaur', 'Chikorita', 'Treccko'],
];

//Shallow copy, doesn't copy nested arrays
let pokedexCopy = [...pokedex];

/* console.log(pokedex);
console.log(pokedexCopy); */
//Copying nested arrays
let realPokedexCopy = JSON.parse(JSON.stringify(pokedex));

pokedex[0].push('Chimchar');

/* console.log(pokedex);
console.log(pokedexCopy);
console.log(realPokedexCopy); */

//Async and callbacks
//Asynchronous

//Javascript
//Single-threaded

//Synchronous with some asynchronous behaviour
// async await

//SetTimeout

function greetPerson() {
  console.log('Hey stranger');
}

//SetTimeout is a non-blocking operation because it doesn't stop the whole code from running
//setTimeout(greetPerson, 2000);

console.log('This should be the last thing');

function endWorld() {
  console.log('Poof');
}

// setTimeout returns an id we can store
let timeoutId = setTimeout(endWorld, 10000);

let playerScore = 2000;
if (playerScore > 1000) {
  //We use clearTimeout to stop the timeout from happening
  clearTimeout(timeoutId);
  console.log('You saved the world');
}

//SetInterval

let player2Score = 0;

/* const intervalId = setInterval(function () {
  player2Score++;
  if (player2Score >= 60) {
    console.log('You won');
    //Here we stop the interval from running inside a condition
    clearInterval(intervalId);
  } else {
    console.log(`Player 2 has a score of: ${player2Score}`);
  }
}, 1000); */

//When the player reaches score 10, stop counting and console.log "You won"
//clearInterval

//Using timer to keep track of t
//let score = 0;
/* 
function startGame() {
  setInterval(() => {
    score++;
    console.log(Math.floor(score * 10));
  }, 1000 / 60);
}

startGame();
 */

//Callback
function useCallback(callback) {
  console.log('I am going to use a callback next that will say:');
  //Settimeout, setInterval, array methods, etc, do this in the background
  callback();
}

const sayGoodbye = () => console.log('Goodbye');
const sayBonjour = () => console.log('Bonjour');

useCallback(sayBonjour);
useCallback(sayGoodbye);
useCallback(endWorld);

let count = 0;

/* function startTimer() {
  setTimeout(() => {
    count++;
    console.log(count);
    startTimer();
  }, 1000);
}

startTimer();
 */

const user = {
  name: 'Diogo',
  age: 30,
  getOlder: function () {
    setInterval(() => {
      this.age++;
      console.log(this.age);
    }, 1000);
  },
};

user.getOlder();
