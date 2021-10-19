import React, { useState } from 'react';
import { auth } from '../../Firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from '@firebase/auth';

export default function PhoneNumber() {
    const [phoneNumber, setphoneNumber] = useState('');
    const [error, setError] = useState('');

    const recaptchaconfig = () => {
        window.RecaptchaVerifier = new RecaptchaVerifier(
            'recaptcha-container',
            {
                size: 'invisible',
                callback: (response) => {
                    console.log('recaptcha resolved');
                    return OnSignInClick();
                },
            },
            auth
        );
    };
    const OnSignInClick = () => {
        recaptchaconfig();
        const PhoneNo = '+91' + phoneNumber;
        signInWithPhoneNumber(auth, '+11234567890', window.RecaptchaVerifier)
            .then((response) => console.log('Sms Sent' + response))
            .catch((err) => console.log(err));
    };

    const ChangeHandler = (e) => {
        if (!isNaN(e.target.value) && e.target.value.length <= 10) {
            setphoneNumber(e.target.value);
        }
    };

    return (
        <div className=" w-full p-3 text-center ">
            <h1 className="text-3xl text-center">Sign In With Phone Number</h1>
            <form
                className="w-9/12 m-auto space-y-5 mt-3 p-4 bg-indigo-100 rounded-xl"
                onSubmit={(e) => {
                    e.preventDefault();
                    OnSignInClick();
                }}
            >
                <div id="recaptcha-container"></div>
                <div>
                    <input
                        name="Phone"
                        id="PhoneNumber"
                        type="tel"
                        className="p-2 w-full text-xl border-4 border-grey-200"
                        onChange={ChangeHandler}
                        placeholder="Enter Phone Here..."
                        value={phoneNumber}
                    />
                </div>
                <div className="text-center text-red-400">
                    <p>{error}</p>
                </div>

                <div className="w-1/2 m-auto">
                    <button
                        className="bg-blue-300 hover:bg-blue-500 w-full text-xl font-bold text-white p-3 rounded"
                        type="Submit"
                    >
                        Get Otp
                    </button>
                </div>
            </form>
        </div>
    );
}
