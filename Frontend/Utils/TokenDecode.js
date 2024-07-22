import { jwtDecode } from 'jwt-decode';

export const isTokenExpired = (token) => {
    if (!token) return true;

    try {
        const { exp } = jwtDecode(token);
        if (!exp) return true;

        const currentTime = Date.now() / 1000;
        return exp < currentTime;
    } catch (error) {
        console.error('Error decoding token:', error);
        return true;
    }
};