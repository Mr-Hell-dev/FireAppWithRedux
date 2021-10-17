import React, { useState } from 'react';
import { auth } from '../../Firebase';
import { RecaptchaVerifier } from '@firebase/auth';

export default function PhoneNumber() {
    const [phoneNumber, setphoneNumber] = useState('');
    const [error, setError] = useState('');

    const recaptchaconfig = new RecaptchaVerifier(
        'recaptcha-container',
        {
            size: 'invisible',
            callback: (response) => {
                console.log('recaptcha resolved');
                OnSignInClick();
            },
        },
        auth
    );


    const signInWithPhone = (phone,recaptcha) =>
    {
        //need woring here
    }

    const OnSignInClick = (e) => {
        e.preventDefault();
            signInWithPhone('+91' + phoneNumber, recaptchaconfig)
            .then((response) => console.log('Sms Sent' + response))
            .catch((err) => setError(err));
    };

    const ChangeHandler = (e) => {
        if (!isNaN(e.target.value) && e.target.value.length <= 10) {
            setphoneNumber(e.target.value);
        }
    };

    return (
        <div className=" w-full p-3 text-center ">
            <h1 className="text-3xl text-center">Sign In With Phone Number</h1>
            <form className="w-9/12 m-auto space-y-5 mt-3 p-4 bg-indigo-100 rounded-xl">
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
                        onClick={OnSignInClick}
                    >
                        Get Otp
                    </button>
                </div>
            </form>
        </div>
    );
}
