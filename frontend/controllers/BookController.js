import { fetchBooks, createBook, updateBook, deleteBook } from '../models/book';

async function handleFetchBooks(setBooks, onError) {
    try {
        const books = await fetchBooks();
        setBooks(books);
    } catch (error) {
        onError(error.message);
    }
}

async function handleCreateBook(data, setBooks, onSuccess, onError) {
    try {
        const newBook = await createBook(data);
        setBooks(prevBooks => [...prevBooks, newBook]);
        onSuccess();
    } catch (error) {
        onError(error.message);
    }
}

async function handleUpdateBook(id, data, setBooks, onSuccess, onError) {
    try {
        const updatedBook = await updateBook(id, data);
        setBooks(prevBooks => prevBooks.map(book => book._id === id ? updatedBook : book));
        onSuccess();
    } catch (error) {
        onError(error.message);
    }
}

async function handleDeleteBook(id, setBooks, onSuccess, onError) {
    try {
        await deleteBook(id);
        setBooks(prevBooks => prevBooks.filter(book => book._id !== id));
        onSuccess();
    } catch (error) {
        onError(error.message);
    }
}

export { handleFetchBooks, handleCreateBook, handleUpdateBook, handleDeleteBook };
