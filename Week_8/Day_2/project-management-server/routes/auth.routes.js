const express = require('express');
const router = express.Router();

// ℹ️ Handles password encryption
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

//importing the jwt package
const jwt = require('jsonwebtoken');

// How many rounds should bcrypt run the salt (default - 10 rounds)
const saltRounds = 10;

// Require the User model in order to interact with the database
const User = require('../models/User.model');

//import the middleware
const { isAuthenticated } = require('../middleware/jwt.middleware');

//Verify route that will be used to check if the user is loggedin/has a token.
router.get('/verify', isAuthenticated, (req, res, next) => {
  console.log(req.payload);
  res.status(200).json(req.payload);
});

// POST /auth/signup
router.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  // Check that username, email, and password are provided
  if (username === '' || email === '' || password === '') {
    res.status(400).json({
      message: 'All fields are mandatory. Please provide your username, email and password.',
    });

    return;
  }

  if (password.length < 6) {
    res.status(400).json({
      message: 'Your password needs to be at least 6 characters long.',
    });

    return;
  }

  //   ! This regular expression checks password for special characters and minimum length
  /*
  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!regex.test(password)) {
    res
      .status(400)
      .json({
        message: "Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter."
    });
    return;
  }
  */

  // Create a new user - start by hashing the password
  bcrypt
    .genSalt(saltRounds)
    .then((salt) => bcrypt.hash(password, salt))
    .then((hashedPassword) => {
      // Create a user and save it in the database
      return User.create({ username, email, password: hashedPassword });
    })
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.status(500).json({ message: error.message });
      } else if (error.code === 11000) {
        res.status(500).json({
          message: 'Username and email need to be unique. Provide a valid username or email.',
        });
      } else {
        next(error);
      }
    });
});

// POST /auth/login
router.post('/login', (req, res, next) => {
  const { username, email, password } = req.body;

  // Check that username, email, and password are provided
  if (username === '' || email === '' || password === '') {
    res.status(400).json({
      message: 'All fields are mandatory. Please provide username, email and password.',
    });

    return;
  }

  // Here we use the same logic as above
  // - either length based parameters or we check the strength of a password
  if (password.length < 6) {
    return res.status(400).json({
      message: 'Your password needs to be at least 6 characters long.',
    });
  }

  // Search the database for a user with the email submitted in the form
  User.findOne({ email })
    .then((user) => {
      // If the user isn't found, send an error message that user provided wrong credentials
      if (!user) {
        res.status(400).json({ message: 'Wrong credentials.' });
        return;
      }

      // If user is found based on the username, check if the in putted password matches the one saved in the database
      bcrypt
        .compare(password, user.password)
        .then((isSamePassword) => {
          if (!isSamePassword) {
            res.status(400).json({ message: 'Wrong credentials.' });
            return;
          }

          //Here the user was able to login
          //payload will be the information inside the token
          const payload = { id: user._id, email: user.email };

          //here we create the actual token
          const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
            algorithm: 'HS256',
            expiresIn: '14d',
          });

          res.status(200).json({ authToken: authToken });
        })
        .catch((err) => next(err)); // In this case, we send error handling to the error handling middleware.
    })
    .catch((err) => next(err));
});

module.exports = router;
