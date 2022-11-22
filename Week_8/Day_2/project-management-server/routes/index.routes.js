const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.json('All good in here');
});

module.exports = router;

/* CRUD app basic endpoints 
 * Should be lowercase 

Project 

GET - /projects
      /songs
      /users
      /games
GET - /projects/:id
POST - /projects
PUT - /projects/:id
DELETE - /projects/:id

*/
