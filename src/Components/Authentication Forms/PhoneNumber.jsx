import React, { useState } from 'react';
import { auth, RecaptchaVerify } from '../../Firebase';
export default function PhoneNumber({
    Loginhandler: OnSignInSubmit,
    Error,
}) {
    const [phoneNumber, setphoneNumber] = useState('');
    const [show, setshow] = useState(false);
    const [otp, setotp] = useState('');

    const handleclick = (e) => {
        e.preventDefault();
    };

    const ValidateOtp = () => {};
    const ChangeHandler = (e) => {
        if (!isNaN(e.target.value) && e.target.value.length <= 10) {
            setphoneNumber(e.target.value);
        }
    };

    return (
        <div className=" w-full p-3 text-center ">
            <h1 className="text-3xl text-center">
                Sign In With Phone Number
            </h1>
            <form className="w-9/12 m-auto space-y-5 mt-3 p-4 bg-indigo-100 rounded-xl">
                <div className="">
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
                <div className="w-1/2 m-auto">
                    <button
                        className="bg-blue-300 hover:bg-blue-500 w-full text-xl font-bold text-white p-3 rounded"
                        type="Submit"
                        onClick={handleclick}
                    >
                        Get Otp
                    </button>
                </div>
                <div id="recaptcha-container"></div>
            </form>
        </div>
    );
}
