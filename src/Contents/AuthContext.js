import {
    createContext,
    useState,
    useEffect,
    useContext,
} from 'react';
import { auth, googleprovider, facebookprovider } from '../Firebase';
import {
    signInWithEmailAndPassword,
    signInWithPhoneNumber,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signOut,
    signInWithPopup,
    sendPasswordResetEmail,
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

    const sendPasswordResstLinkOnEmail = (email) =>
        sendPasswordResetEmail(auth, email);

    const Logout = () => {
        setloggedin(false);
        return signOut(auth);
    };

    const signInWithGoogle = () =>
        signInWithPopup(auth, googleprovider);
    const signInWithFaceBook = () =>
        signInWithPopup(auth, facebookprovider);

    const signInWithPhone = (PhoneNo, appverify) => {
        return signInWithPhoneNumber(auth, PhoneNo, appverify);
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
        signInWithPhone,
        signInWithGoogle,
        signInWithFaceBook,
        sendPasswordResstLinkOnEmail,
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
