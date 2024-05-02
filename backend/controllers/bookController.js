// controllers/bookController.js

const Book = require('../models/book');
const BookRepository = require('../repositories/bookRepository');
const bookRepository = new BookRepository(Book);

exports.createBook = async (req, res) => {
    try {
        const newBook = await bookRepository.create(req.body);
        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllBooks = async (req, res) => {
    try {
        const books = await bookRepository.findAll();
        res.status(200).json(books);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getBook = async (req, res) => {
    try {
        const book = await bookRepository.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: "Livro não encontrado" });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateBook = async (req, res) => {
    try {
        const book = await bookRepository.update(req.params.id, req.body);
        if (!book) {
            return res.status(404).json({ message: "Livro não encontrado" });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const book = await bookRepository.delete(req.params.id);
        if (!book) {
            return res.status(404).json({ message: "Livro não encontrado" });
        }
        res.status(200).json({ message: "Livro deletado com sucesso" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
