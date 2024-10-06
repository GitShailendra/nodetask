const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Routes for handling users
router.get('/', userController.getAllUsers); // Get all users
router.get('/users/new', userController.showCreateUserForm); // Show the form for creating a new user
router.post('/users', userController.createUser); // Create a new user
router.get('/users/:id', userController.getUserById); // Get a user by ID (for editing)
router.post('/users/:id/update', userController.updateUser); // Update a user by ID

module.exports = router;

