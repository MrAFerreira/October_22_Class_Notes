//http comes by default with node
const http = require('http');

const server = http.createServer((request, response) => {
  console.log(request.url);

  if (request.url === '/') {
    response.write('Welcome to my website');
    response.end();
  } else if (request.url === '/andre') {
    response.write('Spooky Andre');
    response.end();
  } else {
    response.statusCode = 404;
    response.write('Page not found');
    response.end();
  }
});

// /about

//selecting the port
server.listen(3000);

//lo
