const router = require('express').Router();
const Book = require('../models/Book.model');

//All of our routes

//Get all
router.get('/book-list', async (req, res, next) => {
  try {
    const books = await Book.find();

    res.render('book/book-list', { books });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//details route

router.get('/book-details/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const singleBook = await Book.findById(id);
    res.render('book/book-details', singleBook);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get('/book-create', (req, res, next) => res.render('book/book-create'));

router.post('/book-create', async (req, res, next) => {
  try {
    const { title, description, author, rating } = req.body;

    /*     if(!(title || description)){
      res.redirect('/error')
    } */

    const createdBook = await Book.create({ title, description, author, rating });

    res.redirect(`/book-details/${createdBook._id}`);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//Edit routes

router.get('/book-edit/:id', async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    res.render('book/book-edit', book);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post('/book-edit/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, author, description, rating } = req.body;

    const updatedBook = await Book.findByIdAndUpdate(id, { title, author, description, rating });

    res.redirect(`/book-details/${updatedBook._id}`);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post('/book-delete/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    await Book.findByIdAndRemove(id);
    res.redirect('/book-list');
  } catch (error) {
    console.log(error);
    next(error);
  }
});

/* 
Using .then
router.get('/book-list', (req, res, next) => {
  Book.find()
    .then((books) => {
      res.render('/books/book-list', { books });
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
}); */

module.exports = router;
