const express = require('express');
const hbs = require('hbs');

const app = express();

//Configure express to use hbs
app.set('views', __dirname + '/public/views');
app.set('view engine', 'hbs');

//Routes
app.get('/', (req, res, next) => {
  let data = {
    firstname: 'Andrea',
    course: 'WebDev',
    address: {
      street: 'Jardim doca do Tabaco',
      number: 87,
    },
    cities: [
      'Lisbon',
      'Barcelona',
      'Ho Chi Minh City',
      'Rio de Janeiro',
      'Houston Rockets',
      'Rome',
      'Berlin',
      'Évora',
    ],
  };

  //accepts two things  - 1-view to render, 2-object with information to render
  res.render('index', data);
});

app.listen(3000, () => console.log('Running on port 3000'));
