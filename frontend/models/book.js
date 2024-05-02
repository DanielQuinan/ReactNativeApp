const API_URL = 'http://192.168.0.108:3000/api/books';

async function fetchBooks() {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Failed to fetch books');
  return await response.json();
}

async function createBook(data) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to create book');
  return await response.json();
}

async function updateBook(id, data) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to update book');
  return await response.json();
}

async function deleteBook(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete book');
  return await response.json();
}

export { fetchBooks, createBook, updateBook, deleteBook };