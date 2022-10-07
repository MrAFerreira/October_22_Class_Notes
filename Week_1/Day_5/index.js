/* const movies = [
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    score: 9.3,
  },
  {
    title: 'The Godfather',
    year: 1972,
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    score: 9.2,
  },
  {
    title: 'The Godfather: Part II',
    year: 1974,
    director: 'Francis Ford Coppola',
    duration: '3h 22min',
    genre: ['Crime', 'Drama'],
    score: 9,
  },
  {
    title: 'The Dark Knight',
    year: 2008,
    director: 'Christopher Nolan',
    duration: '2h 32min',
    genre: ['Action', 'Crime', 'Drama', 'Thriller'],
    score: 9,
  },
];

function orderAlphabetically(moviesArray) {
  const moviesCopy = [...moviesArray];

  moviesCopy.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
    else if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
    else return 0;
  });

  let titlesArray = moviesCopy.map((movie) => movie.title);
  //console.log(titlesArray);

  if (titlesArray.length < 20) return titlesArray;
  else return titlesArray.slice(0, 20);
}

console.log(orderAlphabetically(movies)); */

// OOP - Object Oriented Programming

// using objects to store information/data and actions in the form of methods

//Monopoly

//board
const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

let dice;

/* const player1 = {
  name: 'Bruno',
  color: 'Blue',
  position: 0,
  cash: 1000,
};
const player2 = {
  name: 'Bárbara',
  color: 'Purple',
  position: 0,
  cash: 1000,
};
const player3 = {
  name: 'Gonçalo',
  color: 'Red',
  position: 0,
  cash: 1000,
};

//Roll the dice

dice = Math.floor(Math.random() * 6 + 1);

//Math.floor(Math.random() * (max - min + 1) + min)
//Random between range

//update the player position
player1.position = (player1.position + dice) % squares.length;

//update the player cash
player1.cash += squares[player1.position];

//Check if the player lost and/or where they are at the moment
if (player1.cash <= 0) console.log(`${player1.name} has lost the game`);
else console.log(`${player1.name} is in position ${player1.position} and has ${player1.cash}`);

//Roll the dice

dice = Math.floor(Math.random() * 6 + 1);

//Math.floor(Math.random() * (max - min + 1) + min)
//Random between range

//update the player position
player2.position = (player2.position + dice) % squares.length;

//update the player cash
player2.cash += squares[player2.position];

//Check if the player lost and/or where they are at the moment
if (player2.cash <= 0) console.log(`${player2.name} has lost the game`);
else console.log(`${player2.name} is in position ${player2.position} and has ${player2.cash}`);

//Roll the dice

dice = Math.floor(Math.random() * 6 + 1);

//Math.floor(Math.random() * (max - min + 1) + min)
//Random between range

//update the player position
player3.position = (player3.position + dice) % squares.length;

//update the player cash
player3.cash += squares[player3.position];

//Check if the player lost and/or where they are at the moment
if (player3.cash <= 0) console.log(`${player3.name} has lost the game`);
else console.log(`${player3.name} is in position ${player3.position} and has ${player3.cash}`); */

//Pros - straight-forward
//flexible

// Cons - Waaaaay too much code
// Too much copy pasting
// Code is not DRY at all

//Method / function approach

const player1 = {
  name: 'Bruno',
  color: 'Blue',
  position: 0,
  cash: 1000,
  move() {
    //rolling the dice
    dice = Math.floor(Math.random() * 6 + 1);
    //updating position
    this.position = (this.position + dice) % squares.length;
    //updating cash
    this.cash += squares[this.position];
    //checking gameover
    if (this.cash <= 0) console.log(`${this.name} has lost the game`);
  },
  displayInfo() {
    //console.log info
    console.log(`${this.name} is in position ${this.position} and has ${this.cash}`);
  },
};
const player2 = {
  name: 'Bárbara',
  color: 'Purple',
  position: 0,
  cash: 1000,
  move() {
    //rolling the dice
    dice = Math.floor(Math.random() * 6 + 1);
    //updating position
    this.position = (this.position + dice) % squares.length;
    //updating cash
    this.cash += squares[this.position];
    //checking gameover
    if (this.cash <= 0) console.log(`${this.name} has lost the game`);
  },
  displayInfo() {
    //console.log info
    console.log(`${this.name} is in position ${this.position} and has ${this.cash}`);
  },
};
const player3 = {
  name: 'Gonçalo',
  color: 'Red',
  position: 0,
  cash: 1000,
  move() {
    //rolling the dice
    dice = Math.floor(Math.random() * 6 + 1);
    //updating position
    this.position = (this.position + dice) % squares.length;
    //updating cash
    this.cash += squares[this.position];
    //checking gameover
    if (this.cash <= 0) console.log(`${this.name} has lost the game`);
  },
  displayInfo() {
    //console.log info
    console.log(`${this.name} is in position ${this.position} and has ${this.cash}`);
  },
};

//Movement

//Turn 1
player1.move();
player2.move();
player3.move();

//Turn 2
player1.move();
player2.move();
player3.move();

//Check positions
/* 
player1.displayInfo();
player2.displayInfo();
player3.displayInfo(); */

// More readable
// More DRY
//More reusable

// create an object called library
// property shelf which is an empty array
// method addBook - it accepts a string (a title of a book) and adds it to shelf
//method printLibrary - console.logs the titles in your shelf
// on the method above, print the titles ina  single string separated by a comma

const library = {
  shelf: [],
  addBook(title) {
    this.shelf.push(title);
  },
  printLibrary() {
    console.log(this.shelf.join(', '));
  },
};

/* library.addBook('Moby Dick');
library.addBook('Silmarillion');
library.addBook('1984');
library.printLibrary(); */

//Class

class Player {
  //it will create an object based on the values passed
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.position = 0;
    this.cash = 1000;
  }

  move() {
    //rolling the dice
    dice = Math.floor(Math.random() * 6 + 1);
    //updating position
    this.position = (this.position + dice) % squares.length;
    //updating cash
    this.cash += squares[this.position];
    //checking gameover
    if (this.cash <= 0) console.log(`${this.name} has lost the game`);
  }

  displayInfo() {
    //console.log info
    console.log(`${this.name} is in position ${this.position} and has ${this.cash}`);
  }
}

let miguel = new Player('Miguel', 'black');
let natalia = new Player('Natália', 'green');
let raiza = new Player('Raiza', 'yellow');

/* let raiza = {}
raiza.name = "Raiza"
raiza.color = "yellor"
raiza.position = 0
raiza.cash = 1000 */
/* 
miguel.move();
natalia.move();
raiza.move();
miguel.move();
natalia.move();
raiza.move();
miguel.move();
natalia.move();
raiza.move();

miguel.displayInfo();
natalia.displayInfo();
raiza.displayInfo(); */

//Inheritance

class Animal {
  constructor(name, color, sound) {
    this.name = name;
    this.color = color;
    this.sound = sound;
  }

  makeSound() {
    console.log(this.sound);
  }
}

class Cat extends Animal {
  constructor(name, color, sound, isAsleep) {
    //super only refers to the constructor of the parent class
    super(name, color, sound);

    //properties that are not inside the parent's constructor still need to be declared
    this.isAsleep = isAsleep;
  }

  changeState() {
    this.isAsleep = !this.isAsleep;
  }
}

const tom = new Cat('Tom', 'Blueish Gray', 'meow', false);
tom.makeSound();
tom.changeState();
console.log(tom);

//constructor with super
/* const tom = {}
//the first three properties are triggered with the super because they come from the parent class
tom.name = name;
tom.color = color;
tom.sound = sound;
//the last one is exclusive to cats
tom.isAsleep = isAsleep */

class Penguin extends Animal {
  constructor(name, fishCaught) {
    super(name, 'black and white', 'Pardon, excuse me');
    this.fishCaught = fishCaught;
  }
}

const happy = new Penguin('Happy', 7);
console.log(happy.isAsleep);

// create a Whale class that extends Animal, that has an addition attribute called eaten which is an empty array
//create a method called eat - this method accepts something (a string) and adds it to the eaten array. PLUS it makes the whale sound
//Create a white whale called Moby with the sound Yum
//make moby eat Ahab and Pequod (separately)

class Whale extends Animal {
  constructor(name, color, sound) {
    super(name, color, sound);
    this.eaten = [];
  }

  makeSound() {
    console.log(this.sound.toUpperCase());
  }

  eat(food) {
    this.eaten.push(food);
    this.makeSound();
    //console.log(this.sound)
  }
}

const moby = new Whale('Moby', 'white', 'Yum!');
moby.eat('Ahab');
moby.eat('Pequod');
console.log(moby);

//4 principles of OOP

//Inheritance - building on top of an existing class

//Abstraction - we make methods/functions avialble but we don't need to constantly expose them/write them. Also, makes the code more readable

//Polymorphism -  inheriting methods but changing them/their functionality

// Encapsulation - bringing together properties/methods that affect the specified object
//Makes the code cleaner, avoids side effects
