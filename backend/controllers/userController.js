const User = require('../models/User');
const UserRepository = require('../repositories/UserRepository');

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
        await userRepository.delete(req.params.id);
        res.status(200).json({ message: "Usuário deletado com sucesso" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};