import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // const login = (email, password) => {
    //     return new Promise((resolve, reject) => {
    //         axios.post('http://localhost:3000/users/login', {
    //             'user_email': email,
    //             'user_password': password,
    //         }).then((response) => {

    //             if (response.status !== 200) {
    //                 reject(new Error('Login failed'));
    //             }

    //             const authorization = response.headers['Authorization'];

    //             localStorage.setItem('token', authorization);

    //             // Extract user data from the token (assuming it's a JWT token)
    //             const authorizationWithoutBearer = authorization.split(' ');
    //             const token = authorizationWithoutBearer[1];
    //             const payloadBase64 = token.split('.')[1];
    //             const decodedPayload = atob(payloadBase64);
    //             const payload = JSON.parse(decodedPayload);

    //             // Check if payload exists before setting the user
    //             if (payload && Object.keys(payload).length !== 0) {
    //                 setUser(payload);
    //             }

    //             resolve(response.data);
    //         }).catch((error) => {
    //             reject(error);
    //         }).finally(() => {
    //             let token = localStorage.getItem('token');
    //             console.log('localStorage => ', token);
    //         });
    //     });
    // };

    const login = async (email, password) => {
        try {
            const reqBody = {
                user_email: email,
                user_password: password,
            }
            const response = await axios.post(
                'http://localhost:3000/users/login',
                reqBody
            )
            console.log('55 => ', response)
            if (response.status !== 200)
                throw new Error('Login failed')

            const authorization = response.headers.get('Authorization')

            if (!authorization) {
                throw new Error('Login failed')
            }

            const payload = readPayload(authorization)
            setUser(payload)

            return response

        } catch (error) {
            console.error('login auth context error :: ', error)
        }
    }


    useEffect(() => {
        const tokenWithBearer = localStorage.getItem('token')
        if (tokenWithBearer) {
            const payload = readPayload(tokenWithBearer)
            setUser(payload)
        }
    }, []);

    const readPayload = (jwt) => {
        const authorizationWithoutBearer = jwt.split(' ')
        const token = authorizationWithoutBearer[1]
        const payloadBase64 = token.split('.')[1]
        const decodedPayload = atob(payloadBase64)
        const payload = JSON.parse(decodedPayload)
        return payload;
    }

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

