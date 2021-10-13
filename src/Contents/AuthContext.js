import {
    createContext,
    useState,
    useEffect,
    useContext,
} from 'react';
import { auth } from '../Firebase';
import {
    signInWithEmailAndPassword,
    signInWithPhoneNumber,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
} from 'firebase/auth';

const AuthenticationContext = createContext();

export function AuthenticationContextProvider({ children }) {
    const [curuser, setcuruser] = useState({});

    useEffect(() => {
        const unsubscriber = onAuthStateChanged(auth, (user) => {
            setcuruser(user);
        });
        return unsubscriber;
    }, []);

    const SignInEP = (email, password) =>
        signInWithEmailAndPassword(auth, email, password);

    const SignupEP = (email, password) =>
        createUserWithEmailAndPassword(auth, email, password);
    const Values = {
        curuser,
        SignInEP,
        SignupEP,
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
