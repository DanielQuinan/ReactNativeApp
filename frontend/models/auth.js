import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://192.168.0.108:3000/api/users';

async function loginUser(credentials) {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
    });
    const json = await response.json();
    if (response.ok) {
        await AsyncStorage.setItem('userToken', json.token);
        return json.token;
    } else {
        throw new Error(json.message || 'Unable to login');
    }
}

async function logoutUser() {
    await AsyncStorage.removeItem('userToken');
}

export { loginUser, logoutUser };