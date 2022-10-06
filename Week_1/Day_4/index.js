//Functions

//function declaration
function sum(a, b) {
  return a + b;
}
//function declaration CAN be stored in a varieable
let mySum = sum;

console.log(mySum(2, 3));

//function expression

const newSum = function (a, b) {
  return a + b;
};

//Function expression needs to be inside a varieable

//Hoisting

declared();

function declared() {
  console.log('I am a declared function');
}

const expressed = function () {
  console.log('I am expressed');
};
expressed();

//Arrow function expression
//const arrowExpressed = () => console.log('I am expressed');

//Callback

/* function doFirst(callback) {
  setTimeout(function () {
    console.log('Do this first');
    callback();
    //This is not a callback, it's just invoking another function
    //doAfter()
  }, 1000);
} */

function doAfter() {
  console.log('Do this after');
}
function doSomewhere() {
  console.log('Do this someewhere');
}

//doFirst(doSomewhere);

//let names = ['Andrea', 'Bruno', 'Camila'];

/* names.forEach(function (el) {
  console.log(el);
});

names.forEach(function (el) {
  console.log('Hello ' + el);
}); */

/* function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
} */

//loop over the array

/* function revealMistery(callback){
  let envelope = callback()

  return ``
}

revealMistery(pickMistery) */

/* setTimeout(function () {
  console.log('I will take a while');
}, 2000); */

//Normal function expression
const greeting = function (name) {
  console.log(`Hello ${name}`);
};

//greeting('Ricardo');

//Arrow syntax

const newGreeting = (name) => {
  console.log(`Hello ${name}`);
};

//newGreeting('Juliana');

const shorterGreeting = (name) => console.log(`Hello ${name}`);

//shorterGreeting('Elidiane');

//With a direct return you don't need curly brackets NOR the return keyword
const arrowSum = (a, b) => a + b;

//With curly brackets you need a return statement
const arrowSumBrackets = (a, b) => {
  console.log(a + b);
  return a + b;
};

//console.log(arrowSum(2, 6));

//this keyword and scope
/* const user2 = {
  name: 'André',
  age: 28,
  getOlder: function () {
    console.log(this.age);
  },
}; */

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

//user.getOlder();

// Array methods

//forEach - doesn't mutate the array

let names = ['Diana', 'Gabriela', 'Hugo', 'Bárbara'];

//This doesn't work, forEach doesn't return anything
/* let newNames = names.forEach((name) => {
  return name + '!';
}); */

/* console.log(names);
console.log(newNames); */

//Map

let numArray = [1, 2, 3, 4];

let doublesArray = numArray.map((num) => num * 2);

console.log(numArray);
console.log(doublesArray);

let silent = ['can', 'you', 'hear', 'me', 'now'];

let scream = silent.map((word) => {
  let newWord = word.toUpperCase();
  return newWord + '!';
});

console.log(scream);

//create a new array (using map) with the cities capitalized

const cities = [
  'miami',
  'barcelona',
  'madrid',
  'amsterdam',
  'berlin',
  'ho chi minh city',
  'lisbon',
  'mexico city',
  'paris',
];

let capitalCities = cities.map((city) => city[0].toUpperCase() + city.slice(1));

//console.log(capitalCities);

let allCapitalized = cities.map((city) => {
  const words = city.split(' ');
  console.log(words);
  ['sao', 'paulo'];
  return words.map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
});

//console.log(allCapitalized);

//reduce

/* array.reduce((accumulator, currentValue) => {
  return acc + val;
}, 0);

array.reduce((acc, val) => acc + val); */

let numbers = [2, 4, 6, 8];

/* let result = numbers.reduce((acc, val) => {
  console.log(`Accumulator is: ${acc}, value is ${val}`);
  return acc + val;
}, 0); */

let separate = ['U', 'n', 'i', 't', 'e', 'd'];

const united = separate.reduce((acc, val) => {
  console.log(`Accumulator is: ${acc}, value is ${val}`);
  return acc + val;
}, 'Manchester ');

//console.log(united);
//let numbers = [2, 4, 6, 8];

let result = numbers.reduce((acc, val) => {
  //console.log(`Accumulator is: ${acc}, value is ${val}`);
  return acc + val;
}, 0);

//Using reduce, get back the value of all the products in the array

const products = [
  { name: 'Keyboard', price: 30.0 },
  { name: 'Mouse', price: 64.99 },
  { name: 'Controller', price: 59.8 },
  { name: 'Speakers', price: 43.7 },
];

let productsTotal = products.reduce((acc, val) => {
  //console.log(`Accumulator is: ${acc}, value is ${val}`);
  return acc + val.price;
}, 0);

//console.log(productsTotal);

//Filter

let newNumbers = [1, 2, 3, 4, 5, 6];

let evenNumbers = newNumbers.filter((number) => !(number % 2));
let oddNumbers = newNumbers.filter((number) => number % 2);

console.log(evenNumbers);
console.log(oddNumbers);

//using filter return a new array with only the objects that have available = true

const products2 = [
  { name: 'Keyboard', price: 30.0, available: true },
  { name: 'Mouse', price: 64.99, available: false },
  { name: 'Controller', price: 59.8, available: true },
  { name: 'Speakers', price: 43.7, available: false },
];

const availableProducts = products2.filter((product) => product.available);
const cheapProducts = products2.filter((product) => {
  if (product.available) {
    if (product.price < 50) {
      return product;
    }
  }
});

const cheapProduct2 = products2.filter((product) => product.available && product.price < 50);

console.log(cheapProduct2);

//Sort - mutates the array

const sortedNumbers = [12, 53, 24, 22, 509983, 3, 11];
const sortedStrings = ['Hello', 'ola', 'Oi', 'aloha', 'hola'];

function compare(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  if (a === b) return 0;
}

function compareNumbers(a, b) {
  if (a - b) return -1;
  if (b - a) return 1;
  if (a === b) return 0;
}

sortedStrings.sort((a, b) => {
  if (a.toLowerCase() < b.toLowerCase()) return -1;
  if (a.toLowerCase() > b.toLowerCase()) return 1;
  if (a.toLowerCase() === b.toLowerCase()) return 0;
});
console.log(sortedStrings);

sortedNumbers.sort((a, b) => a - b);

console.log(sortedNumbers);
/* 
80 -  40 = 40
40 - 80 = -40 */

//reverse - mutates the array

sortedNumbers.reverse();

console.log(sortedNumbers);
