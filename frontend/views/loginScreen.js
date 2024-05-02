import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet, Alert } from 'react-native';

function LoginScreen({ onLoginSuccess }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        try {
            await onLoginSuccess(email, password);
            Alert.alert("Sucesso", "Login efetuado com sucesso!");
        } catch (error) {
            Alert.alert("Erro", error);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Pressable style={styles.button} onPress={login}>
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        width: '100%',
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        width: '100%',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
});

export default LoginScreen;