//Promises
// Async code that doesn't block the main thread, and will return us something in the future

/* const myPromise = new Promise((resolve, reject) => {
  if(/* username === username && password === password ){
    resolve(/* user.loggedIn = true )
  } else {
    reject(/* reason ) //error
  }

}) */

// Resolved
// Rejected
// Pending

const promisePending = new Promise((resolve, reject) => {});
const promiseResolved = Promise.resolve(42);
//const promiseRejected = Promise.reject('Username not found');

/* console.log(promisePending);
console.log(promiseResolved);
console.log(promiseRejected);
console.log(2 + 2);
 */

const names = ['Camila', 'Filipe', 'Flávia', 'Pedro', 'Andrea'];
function obtainNames(count) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!names[count]) {
        reject('Name not found');
      } else {
        console.log(names[count]);
        resolve(names[count]);
      }
    }, 1000);
  });
}

//These will take only 1 second, because they are all async and they run at the same time
/* let firstName = obtainNames(0);
console.log('first name here', firstName);
console.log(obtainNames(1));
console.log(obtainNames(2));
console.log(obtainNames(3));
console.log(obtainNames(4));
 */

//Chaining
//.then()
//.then receives the value of the promise that was
// Only happens after the promise is resolved

/* obtainNames(0)
  .then(() => obtainNames(5))
  .catch((err) => console.log(err))
  .then(() => obtainNames(1))
  .then(() => obtainNames(2))
  .then(() => obtainNames(3))
  .then(() => obtainNames(4))
  .catch((err) => console.log(err));
 */
//If there's an error in the promis it's gonna jump to the nearest catch ans stop that chain

//We can have more than 1 catch per chain

//Errors go straight to the catch block
/* const errorPromise = new Promise((resolve, reject) => {
  throw new SyntaxError('Promise failed');
  resolve('Okay');
});

errorPromise.then((value) => console.log(value)).catch((err) => console.log(err)); */

//.then returns a promise

const promiseAlphabet = new Promise((resolve, reject) => {
  setTimeout(() => resolve('A'), 1000);
});

/* promiseAlphabet
  .then((firstValue) => {
    console.log('1.then', firstValue);
    throw new Error('Oops');
    return 'B';
  })
  .then((secondValue) => {
    console.log('2.then', secondValue);
    return 'C';
  })
  .then((thirdValue) => {
    console.log('3.then', thirdValue);
    return 'D';
  })
  .catch((err) => console.error(err))
  .finally(() => {
    console.log('This will run no matter what');
  }); */
//Finally runs no matter what happens

// Promise.all

/* const oneSecond = new Promise((resolve, reject) => {
  setTimeout(() => reject('Lucas was not found because hes halloween costume is a ghost'), 1000);
}); */
const fourSeconds = new Promise((resolve, reject) => {
  setTimeout(() => resolve('João'), 4000);
});
const threeSeconds = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Bárbara'), 3000);
});
const twoSeconds = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Carlota'), 2000);
});

/* oneSecond
  .then((value) => {
    console.log(value);
    return fourSeconds;
  })
  .then((value) => {
    console.log(value);
    return threeSeconds;
  })
  .then((value) => {
    console.log(value);
    return twoSeconds;
  })
  .then((value) => console.log(value)); */

//Promise.all()

/* Promise.all([oneSecond, twoSeconds, threeSeconds, fourSeconds])
  .then((allValues) => console.log(allValues))
  .catch((err) => console.log(err));

 */

//Async / await

async function myFunction() {
  return true;
}

const myAsyncFunction = async () => {
  return true;
};

/* function obtainNames(count) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!names[count]) {
        reject('Name not found');
      } else {
        console.log(names[count]);
        resolve(names[count]);
      }
    }, 1000);
  });
} */

//Await can only be used with promises
async function getAllNames() {
  try {
    await obtainNames(0);
    await obtainNames(1);
    console.log('Sashay away');
    await obtainNames(2);
    await obtainNames(3);
    await obtainNames(6);
  } catch (err) {
    console.log(err);
  }
}
//try /catch

//getAllNames();
