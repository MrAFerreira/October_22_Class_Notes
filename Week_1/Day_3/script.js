/* const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function sumArray(arr) {
  if (!arr.length) {
    return null;
  }

    let myArray = [];

  if (typeof myArray === 'object') {
    throw new Error('Unsuported data type');
  } 
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'boolean') {
      if (arr[i]) {
        sum++;
      }
    } else if (typeof arr[i] === 'string') {
      sum += arr[i].length;
    } else {
      sum += arr[i];
    }
  }

  return sum;
}

console.log(sumArray(mixedArr)); */
//Arrays and objects can't be compared this way
/* console.log([0] === [0]);
console.log({} === {});
 */

// Objects

const myObj = {
  'first name': 'André',
  color: 'green',
  age: 28,
};
/* const myObj2 = new Object() */

const myStore = {
  keyboard: 30.99,
  mouse: 15,
  screen: 'Not available',
  'gaming chair': 100,
  games: ['Pokemon red', 'Pokemon Yellow'],
};

let userSearch = 'middleName';

const names = {
  firstName: 'Lucas',
  middleName: 'Sampaio',
  lastName: 'Zaquine',
};

// dot notation
//console.log(myStore.mouse);

//bracket notation
//console.log(myStore['gaming chair']);

//particularly useful with variables
//console.log(names[userSearch]);

//doesn't exist yet
//console.log(myStore.laptop);

myStore.laptop = 2000;

myStore['mouse pad'] = 5;

//change the value
myStore.screen = 30;

//delete just... deletes
delete myStore['mouse pad'];

//to check if something exists we use in

/* console.log('car' in myStore);
console.log(userSearch in names); */

//Iterating
//Object.keys, Object.values

let myStoreKeys = Object.keys(myStore);
//console.log(myStoreKeys);

//let myStoreValues = Object.values(myStore);
//console.log(myStoreValues);

/* for (let i = 0; i < myStoreKeys.length; i++) {
  console.log(`product:${myStoreKeys[i]} price: ${myStore[myStoreKeys[i]]}`);
} */

//for in

for (let product in myStore) {
  console.log(`Product : ${product}, price: ${myStore[product]}`);
}

//console.log(myStore);

//Older syntax
/* myStore.games.forEach(function (game) {
  console.log(game);
});
 */
//arrow syntax
//myStore.games.forEach((game) => console.log(game));

//not possible because it is trying to assign a completely new object to a const
/* myStore = {
  keyboard: 30.99,
}; */

//this is possible but will substitute the first object with the second one, NOT add something to it
/* let myStore2 = {};

myStore2 = { desk: 100 };

console.log(myStore);
 */

const user = {
  name: 'André',
  city: 'Lisbon',
};

const song1 = { title: 'Ride on Time', artist: 'Tatsuro Yamashita', genre: 'City Pop' };
const song2 = { title: 'Song 2', artist: 'Blur', genre: 'Rock' };
const song3 = { title: 'This is why', artist: 'Paramore', genre: 'Pop Rock?' };

//playlist is an array with the 3 songs

/* let collection = [song1, song2, song3];
console.log(collection); */

user.playlist = [song1, song2, song3];
//console.log(user);

/* user = {
  name: 'André',
  city: 'Lisbon',
  playlist: [
    {
      title: 'Ride on Time',
      artist: 'Tatsuro Yamashita',
      genre: 'City Pop',
    },
    { title: 'Song 2', artist: 'Blur', genre: 'Rock' },
    { title: 'This is why', artist: 'Paramore', genre: 'Pop Rock?' },
  ],
};  */

console.log(user.playlist[1].artist);
//console.log(user['playlist'][1]['artist']);

/* const dex = [
  { name: 'Accelgor', type: 'Bug' },
  { name: 'Psyduck', type: 'Water' },
  { name: 'Moltres', type: 'Fire' },
];

const newPokemon = { name: 'Poliwhirl', type: 'Water' };

dex.push(newPokemon);

console.log(dex); */

/* const matrix = [
  ['Bulbasaur', 'Charmander'],
  ['Rattata', 'Weedle'],
];

console.log(matrix[1][1]); */

const company = [
  [
    { name: 'Beulah Moody', email: 'vagegez@zeuneoze.hk' },
    { name: 'Hattie Jefferson', email: 'biprag@vus.tn' },
    { name: 'Jared Shelton', email: 'tararo@godaro.is' },
  ],
  [
    { name: 'Todd Sutton', email: 'purmu@herdavmaw.gd' },
    { name: 'Clifford Palmer', email: 'dokwer@osuzimke.fi' },
    { name: 'Bruce McCoy', email: 'azi@ah.cc' },
  ],
  [
    { name: 'Franklin Moody', email: 'fa@sonhe.la' },
    { name: 'Hallie Oliver', email: 'upome@malronwe.lu' },
    { name: 'Lee Ross', email: 'bobeho@ucbu.lr' },
  ],
];
console.log(company[0][2]);

console.log(company[1][1].name);

const cohort = {
  teacher: { name: 'André', age: 28 },
  ta: { name: 'Lucas' },
  students: [{ name: '', age: '' }],
};
