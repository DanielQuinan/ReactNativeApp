import { loginUser, logoutUser } from '../models/auth';

async function handleLogin(email, password, onSuccess, onError) {
    try {
        const token = await loginUser({ email, password });
        onSuccess(token);
    } catch (error) {
        onError(error.message);
    }
}

function handleLogout(onSuccess) {
    logoutUser();
    onSuccess();
}

export { handleLogin, handleLogout };