//https://www.github.com/fcaramez/vuejs-course/projects?query=is%3Aopen
//protocol
//http

//host/domain name
//www.github.com

//path
//fcaramez/vuejs-course/projects

//query
//?query=is%3Aopen

//HTTP
// Hyper Text Transfer Protocol

//HTTP verbs:

//GET - Gets info from the server
//POST - Sending secure information / Creating information
//PUT - Update information
//DELETE - Deletes something

// Status Codes
// 2xx  - Success
// 3xx - Redirect
// 4xx - Client Error
// 5xx - Server error
//require

const myColors = require('colors/safe');
const cowsay = require('cowsay');

console.log(myColors.yellow('Yellow there'));
console.log(myColors.red.underline('Spooky red'));
console.log(myColors.inverse('Spooky inverted ghost'));
console.log(myColors.rainbow('Im a unicorn'));
console.log(myColors.trap('Run the trap heeeeere'));

console.log(
  myColors.trap(
    cowsay.say({
      text: "I'm a moooodule",
      e: '=.=',
      T: 'U ',
    })
  )
);
