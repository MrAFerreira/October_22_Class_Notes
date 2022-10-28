const express = require('express');
const hbs = require('hbs');

const app = express();

//Middleware
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

function fakeMiddleware(req, res, next) {
  console.log(req.params);
  req.spookySeason = 'Halloween';
  console.log('Fake middleware was called');
  next();
}

app.use(fakeMiddleware);

app.set('views', __dirname + '/public/views');
app.set('view engine', 'hbs');

app.get('/', (req, res, next) => {
  console.log(req.spookySeason);
  res.render('index');
});

app.get('/login', (req, res, next) => {
  res.render('login');
});

app.post('/login', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

//Params - after the slash
app.get('/users/:username/playlists/:id', (req, res, next) => {
  console.log(req.params);
  res.send('done');
});

//Query
app.get('/search', (req, res, next) => {
  console.log(req.query.startDate);
  res.send(req.query);
});

app.listen(3000, () => console.log('Running on port 3000'));
