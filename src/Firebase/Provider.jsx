import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from './Firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser);
        });

        return () => unsubscribe(); // Proper cleanup
    }, []);



    const logOutUser = () => {
        return signOut(auth);
    };

    const appInfo = {
        user,
        setUser, // Optional if you plan to update user from components
        googleSignIn,
        logOutUser,
    };

    return (
        <AuthContext.Provider value={appInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
