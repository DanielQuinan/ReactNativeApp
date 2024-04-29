const User = require('../models/User');
const UserRepository = require('../repositories/UserRepository');
const jwt = require('jsonwebtoken')

const userRepository = new UserRepository(User);

exports.getAllUsers = async (req, res) => {
    try {
        const users = await userRepository.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.createUser = async (req, res) => {
    try {
        const savedUser = await userRepository.create(req.body);
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const updateUser = await userRepository.update(req.params.id, req.body);
        res.status(200).json({ message: "Usuário alterado com sucesso", data: updateUser });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await userRepository.delete(req.params.email);
        res.status(200).json({ message: "Usuário deletado com sucesso" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.loginUser = async (req, res) => {
    try {
      const user = await userRepository.findByEmail(req.body.email);
      if (user && await user.comparePassword(req.body.password)) {
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
      } else {
        res.status(401).json({ message: 'Email ou senha incorretos' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};