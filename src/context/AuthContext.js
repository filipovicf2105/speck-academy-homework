import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            setIsLoggedIn(true);
        }
    }, []);

    const login = () => {
        setIsLoggedIn(true);
    }
    
    const logout = () => {
        setIsLoggedIn(false);
    }
    
    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };