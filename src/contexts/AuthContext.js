import React, { useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebase';

const AuthContext = React.createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    const signup = async(email, password) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth,email,password);
            const user = userCredential.user;
            return user;
        } catch (error) {
            throw error;
        }
    };

    const login  = async(email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth,email,password);
            const user = userCredential.user;
            return user;
        } catch (error) {
            console.log("ERROR LOGGING IN");
            throw(error);
        }
    }

    const logout = async() =>{
        try {
            auth.signOut();
        } catch (error) {
            throw(error);
        }
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        signup, // Include the signup function in the context value
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
