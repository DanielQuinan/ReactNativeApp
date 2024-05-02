import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './views/loginScreen';
import LibraryScreen from './views/libraryScreen';
import { handleLogout } from './controllers/authController';

export default function App() {
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkToken = async () => {
            const storedToken = await AsyncStorage.getItem('userToken');
            setToken(storedToken);
            setLoading(false);
        };
        checkToken();
    }, []);

    const onLoginSuccess = (token) => {
        setToken(token);
    };

    const onLogoutSuccess = () => {
        setToken(null);
    };

    if (loading) {
        return <View style={styles.container}><ActivityIndicator size="large" /></View>;
    }

    return token ? (
        <LibraryScreen onLogout={() => handleLogout(onLogoutSuccess)} />
    ) : (
        <LoginScreen onLoginSuccess={onLoginSuccess} />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});