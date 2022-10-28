//Destructuring

let student = {
  name: 'Juliana',
  bootcamp: 'WebDev',
  favouriteMusic: 'Green Day',
  country: 'Germany',
  address: {
    street: 'Javascript Avenue',
    number: Math.random(),
  },
};

/* let name = student.name;
let bootcamp = student.bootcamp;
let favouriteMusic = student.favouriteMusic; */
const pokemon = {
  name: 'Skarmory',
  types: {
    main: 'Steel',
    secondary: 'Flying',
  },
  generation: 2,
  isCatchable: true,
};

let {
  name,
  generation,
  types: { main },
} = pokemon;

//console.log(`${name} is of type ${main} and is from generation ${generation}`);

//Skarmory is of type Steel and it is from generation 2

let {
  name: firstName,
  bootcamp,
  favouriteMusic,
  country = 'Brazil',
  address: { street, number },
} = student;
/* console.log(name);
console.log(bootcamp);
console.log(favouriteMusic); */

/* console.log(street, number);
console.log(
  `${firstName} is in the ${bootcamp} and her favourite band is ${favouriteMusic}, and they're visiting ${country}`
);
 */

/* const campuses = ['Lisbon', 'Madrid', 'Barcelona', "hamburg"];

const [firstCampus, , thirdCampus, fourthCampus = 'Berlin'] = campuses; */

/* console.log(firstCampus, thirdCampus, fourthCampus);

console.log(campuses);
 */

const allCampuses = [
  ['Lisbon', 'pt'],
  ['São Paulo', 'br'],
  ['Mexico', 'mex'],
  ['Berlin', 'de'],
  ['London', 'uk'],
];

const [
  [firstCity, firstCountry],
  [secondCity, secondCountry],
  wholeCampus,
  ,
  [thirdCity, thirdCountry],
] = allCampuses;

//console.log(wholeCampus[0]);

const campuses = ['Lisbon', 'Madrid', 'Barcelona', 'Hamburg'];

const [firstCampus, secondCampus, thirdCampus, fourthCampus = 'Berlin'] = campuses;

let values = [3, 4];

let [firstValue, secondValue = 2, thirdValue, fourthValue = 1] = values;

//console.log(campuses[100]);

// 3, 4, undefined , 1 - ||||||||||||
// 3, 2, 4, 1 - ||||||
// 3, 2, undefined, 1 - |||

//console.log(a, b, c, d);

//Spread and rest operator

const reptiles = ['snake', 'lizard', 'alligator'];
const pets = ['cat', 'dog', 'parrot'];

//const animals = reptiles.concat(pets);

const animals = [...reptiles, ...pets];

console.log(animals);

const reptilesCopy = reptiles.slice();
const petsCopy = [...pets];

//Rest operator

function addNumbers(...numbers) {
  //reduce
  return numbers.reduce((acc, val) => acc + val);
}

addNumbers(1, 2);
addNumbers(1, 2, 3);
console.log(addNumbers(1, 2, 4, 5, 6));

function showMovie(title, year, ...actresses) {
  console.log(`${title} was released in ${year} and it stars ${actresses.join(', ')}`);
}

showMovie('Mean Girls', 2004, 'Lindsay Lohan', 'Rachel Adams', 'Amanda Seinfeld');
