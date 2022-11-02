//Authentication
//Login / Enter a website / Give credentials / Confirm identity / verify if the user is who they say they are

//Authorization
// If you can do something or not
// user/admin

const bcrypt = require('bcryptjs');
//hash

const password1 = 'hovercat';
const password2 = 'Hovercat';

// salt

const salt = bcrypt.genSaltSync(10);

//console.time('Salt');
const hash1 = bcrypt.hashSync(password1, salt);
const hash2 = bcrypt.hashSync(password2, salt);
//console.timeEnd('Salt');

const verifiedPassword1 = bcrypt.compareSync(password1, hash1);
const verifiedPassword2 = bcrypt.compareSync(password2, hash2);

console.log(salt);
console.log(hash1);
console.log(hash2);
console.log(verifiedPassword1);
console.log(verifiedPassword2);
