import React, { useState, useEffect } from 'react';
import {
  StyleSheet, View, TextInput, Text, Pressable, ScrollView, Alert,
  KeyboardAvoidingView, Platform
} from 'react-native';
import { handleFetchBooks, handleCreateBook, handleDeleteBook } from '../controllers/BookController';

export default function LibraryScreen({ onLogout }) {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    handleFetchBooks(setBooks, (message) => Alert.alert('Error', message));
  }, []);

  const addBook = () => {
    handleCreateBook({ title, author, year: parseInt(year) }, setBooks, () => {
      setTitle('');
      setAuthor('');
      setYear('');
      Alert.alert('Success', 'Book added successfully');
    }, (message) => Alert.alert('Error', message));
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <ScrollView>
        {books.map((book) => (
          <View key={book._id} style={styles.bookItem}>
            <Text style={styles.bookText}>{book.title} - {book.author} ({book.year})</Text>
            <Pressable onPress={() => handleDeleteBook(book._id, setBooks)} style={styles.deleteButton}>
              <Text style={styles.buttonText}>Delete</Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          placeholder="Title"
        />
        <TextInput
          value={author}
          onChangeText={setAuthor}
          style={styles.input}
          placeholder="Author"
        />
        <TextInput
          value={year}
          onChangeText={setYear}
          style={styles.input}
          placeholder="Year"
          keyboardType="numeric"
        />
        <Pressable style={styles.button} onPress={addBook}>
          <Text style={styles.buttonText}>Add Book</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={onLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  inputContainer: {
    padding: 20,
  },
  input: {
    borderColor: 'pink',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    width: '100%',
  },
  button: {
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    color: 'white',
  },
  bookItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
    width: '100%',
  },
  bookText: {
    color: 'black',
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
});

