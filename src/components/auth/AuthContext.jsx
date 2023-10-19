import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (email, password) => {
        axios.post('http://localhost:3000/users/login', {
            'user_email': email,
            'user_password': password,
        }).then((response) => {

            if (response.status !== 200) {
                throw new Error('Login failed');
            }

            const authorization = response.headers.get('Authorization');

            localStorage.setItem('token', authorization);
            console.log(authorization)
            // Extract user data from the token (assuming it's a JWT token)
            const authorizationWithoutBearer = authorization.split(' ');
            const token = authorizationWithoutBearer[1];
            const payloadBase64 = token.split('.')[1];
            const decodedPayload = atob(payloadBase64);
            const payload = JSON.parse(decodedPayload);


            // Log the payload to check its contents
            console.log('Payload:', payload);

            // Check if payload exists before setting the user
            if (payload && Object.keys(payload).length !== 0) {
                setUser(payload);
            }

            console.log(user)
            console.log(response)
            return response.data;
            // Redirect to /dashboard
            // You will need to implement your own logic for redirection
            // For example, you can use react-router-dom
        }).catch((error) => {
            console.log(error)
        }).finally(() => {
            let token = localStorage.getItem('token')
            console.log('localStorage => ', token)
        });

    };


    useEffect(() => {
        // Add a request interceptor
        axios.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem('token');
                if (token) {
                    config.headers.Authorization = `${token}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext)
}

