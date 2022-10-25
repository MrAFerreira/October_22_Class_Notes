const express = require('express');

const app = express();

//This tells express that the public folder will hold all of our static files (css styles, images, etc)
app.use(express.static('public'));
// http://localhost:3000/images/download.jpeg

//Creating a route

app.get('/home', (req, res, next) => {
  //res.send('<h1>Hello Cruise ship</h1>');
  res.sendFile(__dirname + '/public/views/home.html');
});

app.get('/cat', (req, res, next) => {
  res.sendFile(__dirname + '/public/views/cat.html');

  /* res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/stylesheets/style.css" />
    <title>Cat Page</title>
  </head>
  <body>
    <h1>This is my cat page</h1>
    <img src="/images/download.jpeg" alt="Cat that is hovering" />
  </body>
  </html>`); */
});

app.listen(3000, () => console.log('App running on port 3000'));
