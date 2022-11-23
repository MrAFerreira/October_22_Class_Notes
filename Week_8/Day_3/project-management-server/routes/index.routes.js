const router = require('express').Router();
const fileUploader = require('../config/cloudinary.config');

router.get('/', (req, res, next) => {
  res.json('All good in here');
});

router.post('/upload', fileUploader.single('image'), (req, res, next) => {
  if (!req.file) {
    next(new Error('No file uploaded'));
    return;
  }

  res.json({ fileUrl: req.file.path });
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
