import { createContext, useState, useEffect, useContext } from 'react';
import { auth } from '../Firebase';
import {
    signInWithEmailAndPassword,
    signInWithPhoneNumber,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signOut,
} from 'firebase/auth';

const AuthenticationContext = createContext();

export function AuthenticationContextProvider({ children }) {
    const [currentUser, setcurrentUser] = useState();
    const [loggedin, setloggedin] = useState(false);

    useEffect(() => {
        const unsubscriber = onAuthStateChanged(auth, (user) => {
            setcurrentUser(user);
            if (user !== null) setloggedin(true);
        });
        return unsubscriber;
    }, []);

    const Logout = () => {
        setloggedin(false);
        return signOut(auth);
    };

    const SignInEP = (email, password) =>
        signInWithEmailAndPassword(auth, email, password);

    const SignUpEP = (email, password) =>
        createUserWithEmailAndPassword(auth, email, password);
    const Values = {
        currentUser,
        loggedin,
        SignInEP,
        SignUpEP,
        Logout,
    };

    return (
        <AuthenticationContext.Provider value={Values}>
            {children}
        </AuthenticationContext.Provider>
    );
}

export function useAuthentication() {
    return useContext(AuthenticationContext);
}
