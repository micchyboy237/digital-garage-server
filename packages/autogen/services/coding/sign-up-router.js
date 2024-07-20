// filename: sign-up-router.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Sign up user
router.post('/signup', (req, res) => {
  const { email, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  // Check if email already exists in the database
  // For simplicity, assume a simple in-memory store
  const users = require('./users.json');
  const existingUser = users.find((user) => user.email === email);

  if (existingUser) {
    return res.status(400).send({ message: 'Email already exists' });
  }

  // Create new user
  const newUser = { email, password: hashedPassword };
  users.push(newUser);

  // Generate JWT token for the newly created user
  const token = jwt.sign({ email }, process.env.SECRET_KEY, {
    expiresIn: '1h',
  });

  return res.status(201).send({ message: 'User created', token });
});

// Social login options (Google, Apple, Facebook)
router.get('/social-login', (req, res) => {
  // For simplicity, assume a simple in-memory store
  const users = require('./users.json');

  // Redirect to the social login page
  return res.redirect('https://example.com/social-login');
});

// Password validation
router.post('/validate-password', (req, res) => {
  const { password } = req.body;

  if (!password || password.length < 8) {
    return res.status(400).send({ message: 'Password must be at least 8 characters long' });
  }

  // Check for special characters
  if (!/^[a-zA-Z0-9!@#$%^&*()_+-={}\[\]:;<>?,.<\/\|`~]+$/.test(password)) {
    return res.status(400).send({ message: 'Password must contain at least one special character' });
  }

  return res.status(200).send({ message: 'Password is valid' });
});

// Email validation
router.post('/validate-email', (req, res) => {
  const { email } = req.body;

  if (!email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    return res.status(400).send({ message: 'Email is invalid' });
  }

  return res.status(200).send({ message: 'Email is valid' });
});

// Email confirmation
router.get('/confirm-email', (req, res) => {
  // For simplicity, assume a simple in-memory store
  const users = require('./users.json');

  // Find the user by email and confirm their account
  const user = users.find((user) => user.email === req.query.email);

  if (!user) {
    return res.status(404).send({ message: 'User not found' });
  }

  user.confirmed = true;

  return res.status(200).send({ message: 'Email confirmed' });
});

// Terms and conditions
router.get('/terms-and-conditions', (req, res) => {
  // Return the terms and conditions document
  return res.sendFile(__dirname + '/terms-and-conditions.md');
});

// Duplicate email check
router.post('/check-email', (req, res) => {
  const { email } = req.body;

  // For simplicity, assume a simple in-memory store
  const users = require('./users.json');

  if (users.find((user) => user.email === email)) {
    return res.status(400).send({ message: 'Email already exists' });
  }

  return res.status(200).send({ message: 'Email is available' });
});

module.exports = router;