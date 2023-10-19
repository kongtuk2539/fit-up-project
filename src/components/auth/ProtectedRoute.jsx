import React, { useContext, useEffect } from "react";
import { Navigate } from 'react-router';
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
    const auth = useAuth();
    console.log(auth);

    if (!auth.user) {
        console.log('not auth');
        return <Navigate to='/' />
        // You can implement your own logic for redirection here
    }

    return children;
};

export default ProtectedRoute;