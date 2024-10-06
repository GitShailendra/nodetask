const User = require('../models/User');

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.render('index', { users });
    } catch (error) {
        res.status(500).send('Server Error');
    }
};

// Create a new user
exports.createUser = async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const newUser = new User({ name, email, age });
        await newUser.save();
        res.redirect('/');
    } catch (error) {
        res.status(500).send('Error creating user');
    }
};

// Update user by ID
exports.updateUser = async (req, res) => {
    try {
        const { name, email, age } = req.body;
        await User.findByIdAndUpdate(req.params.id, { name, email, age });
        res.redirect('/');
    } catch (error) {
        res.status(500).send('Error updating user');
    }
};

// Get single user by ID for update form
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.render('userForm', { user });
    } catch (error) {
        res.status(500).send('Error fetching user');
    }
};
exports.showCreateUserForm = (req, res) => {
    res.render('userForm', { user: null }); // Passing null for user since we are creating a new user
};