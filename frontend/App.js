import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Pressable, Alert } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      let response = await fetch('http://192.168.0.105:3000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      let json = await response.json();
      if (response.status === 201) {
        Alert.alert("Sucesso", "Usuário criado com sucesso!");
      } else {
        Alert.alert("Erro", json.message || "Não foi possível criar o usuário.");
      }
    } catch (error) {
      Alert.alert("Erro de Rede", "Não foi possível conectar ao servidor.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.formInput}
        placeholder="informe o E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.formInput}
        placeholder="Informe a senha"
        secureTextEntry
        autoCapitalize="none"
        value={password}
        onChangeText={setPassword}
      />
      <Pressable style={styles.formButton} onPress={handleSignUp}>
        <Text style={styles.formButtonText}>Cadastrar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formTitle: {
      fontSize: 36,
      fontWeight: 'bold',
      color: 'pink',
      margin: 10,
  },
  formInput: {
    borderColor: 'pink',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 22,
    width: '80%',
    padding: 10,
    margin: 10,
  },
  formButton: {
      backgroundColor: 'pink',
      width: '80%',
      margin: 10,
      padding: 10,
      borderRadius: 10,
      alignItems: 'center',
  },
  textButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  subButton: {
    padding: 10,
  },
  subTextButton: {
    color: 'pink',
  }
});
