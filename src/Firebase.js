// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
//RecaptchaVerifier
import {
    getAuth,
    GoogleAuthProvider,
    FacebookAuthProvider,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_Firebase_API_KEY,
    authDomain: process.env.REACT_APP_Firebase_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_Firebase_PROJECT_ID,
    storageBucket: process.env.REACT_APP_Firebase_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_Firebase_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_Firebase_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleprovider = new GoogleAuthProvider()
    .addScope(process.env.REACT_APP_FIREBASE_GOOGLE_PROVIDER)
    .setCustomParameters({
        login_hint: 'user@example.com',
    });
export const facebookprovider = new FacebookAuthProvider().addScope(
    process.env.REACT_APP_FIREBASE_FACEBOOK_PROVIDER
);
