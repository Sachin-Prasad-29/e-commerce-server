const { createHttpError } = require('../errors/custom-error');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User')

const register = async (req, res, next) => {
    const data = req.body;
    const userDetails = { email: req.body.email, name: req.body.name, password: req.body.password };
    const insertedUser = await User.create(userDetails);
    res.status(200).json({ success: insertedUser, msg: 'Register Success' });
};
const login = async (req, res) => {
    res.status(200).json({ success: true, msg: 'Login Success' });
};
const getProfile = async (req, res) => {
    res.status(200).json({ success: true, msg: 'Profile get Success' });
};
const editProfile = async (req, res) => {
    res.status(200).json({ success: true, msg: 'Profile edit Success' });
};

module.exports = {
    register,
    login,
    getProfile,
    editProfile,
};
