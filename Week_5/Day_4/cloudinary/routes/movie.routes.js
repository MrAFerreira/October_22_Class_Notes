const router = require('express').Router();
const fileUploader = require('../config/cloudinary.config');
const Movie = require('../models/Movie.model');

router.get('/create', (req, res) => res.render('movies/create'));

router.post('/create', fileUploader.single('image'), async (req, res, next) => {
  const { title, description } = req.body;
  try {
    let imageUrl;

    if (req.file) {
      imageUrl = req.file.path;
    } else {
      imageUrl = 'https://upload.wikimedia.org/wikipedia/en/e/ed/Nyan_cat_250px_frame.PNG';
    }

    const createdMovie = await Movie.create({ title, description, imageUrl });
    res.redirect('/movies/create');
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get('/list', async (req, res, next) => {
  try {
    const movies = await Movie.find();

    res.render('movies/list', { movies });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get('/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findById(id);
    res.render('movies/edit', movie);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post('/edit/:id', fileUploader.single('image'), async (req, res, next) => {
  const { title, description, currentImage } = req.body;
  const { id } = req.params;
  try {
    let imageUrl;

    if (req.file) {
      imageUrl = req.file.path;
    } else {
      imageUrl = currentImage;
    }

    await Movie.findByIdAndUpdate(id, { title, description, imageUrl });

    /* if (req.file) {
      imageUrl = req.file.path;
      const editedMovie = await Movie.findByIdAndUpdate(id, { title, description, imageUrl });
    } else {
      const editedMovie = await Movie.findByIdAndUpdate(id, { title, description });
    } */

    res.redirect('/movies/list');
    /*  const editedMovie = await Movie.findByIdAndUpdate(id,{title, description, imageUrl} ) */
  } catch (error) {
    console.log(error);
    next(error);
  }
});
module.exports = router;
