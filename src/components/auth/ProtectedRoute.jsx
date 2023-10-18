import React, { useContext } from "react";
import { Navigate } from 'react-router';
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
    const auth = useAuth()

    if (auth.user !== 'admin@123.com') {
        console.log('not auth')
        return <Navigate to='/' />
    }

    console.log('auth =>', auth.user)
    return children
};

export default ProtectedRoute;