import React, { useState } from 'react';

import {
    getAuth,
    signInWithEmailAndPassword,
    signInWithPhoneNumber,
} from 'firebase/auth';
import Login from '../../Components/Authentication Forms/Login';
import Signup from '../../Components/Authentication Forms/Signup';

import sideimg from './images.jpg';
import PhoneNumber from '../../Components/Authentication Forms/PhoneNumber';
export default function Authentication({ Form }) {
    const [currentform, setcurrentform] = useState(Form);
    const [error, setError] = useState('');

    const handleLoginWithPhoneNumber = async (
        e,
        // phoneNumber,
        recaptchaVerifier,
    ) => {
        setError('');
        e.preventDefault();
        const phoneNumber = '+918076616684';
        const appVerifier = recaptchaVerifier;

        const auth = getAuth();
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                // ...
            })
            .catch((error) => {
                // Error; SMS not sent
                // ...
            });
    };

    const handleLoginWithEmailandpassword = async (
        e,
        email,
        password,
    ) => {
        setError('');
        e.preventDefault();
        await signInWithEmailAndPassword(getAuth(), email, password)
            .then((userdata) => console.log(userdata))
            .catch((err) => {
                console.log(err.code);
                switch (err.code) {
                    case 'auth/invalid-email':
                    case 'auth/user-not-found':
                        setError('Invalid Email');
                        break;
                    case 'auth/wrong-password':
                        setError('Invalid Credentails');
                        break;
                    default:
                        setError('Something went wrong Try again');
                        break;
                }
            });
    };

    return (
        <>
            <div
                className={`flex w-screen h-screen bg-indigo-50 flex-${
                    currentform === 'Login' ? 'row' : 'row-reverse'
                } justify-evenly`}
            >
                <section className="w-1/2 h-full ">
                    {currentform === 'Login' && (
                        <>
                            <Login
                                Loginhandler={
                                    handleLoginWithEmailandpassword
                                }
                                Errors={error}
                            />
                        </>
                    )}
                    {currentform === 'SignUp' && (
                        <>
                            <Signup />
                            <button
                                onClick={() =>
                                    setcurrentform('Login')
                                }
                            >
                                Already Have an Account
                            </button>
                        </>
                    )}
                    {currentform === 'Phone_Number' && (
                        <PhoneNumber Error={error} />
                    )}
                </section>
                <section className="w-1/2">
                    <img
                        className=" relative h-full m-auto"
                        src={sideimg}
                        alt="Random pic"
                    />
                </section>
            </div>
        </>
    );
}
