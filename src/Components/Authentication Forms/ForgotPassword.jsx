import React, { useRef, useState } from 'react';
import { validateEmail } from '../../Validations';

export default function ForgotPassword({ setform }) {
    const EmailField = useRef(null);
    const [error, setError] = useState('');
    const sendPasswordResstLinkOnEmail = (email) => {
        //need working here
    };

    const ResetPassword = (e) => {
        setError('');
        const email = EmailField.current.value;
        e.preventDefault();
        try {
            if (validateEmail(email)) {
                sendPasswordResstLinkOnEmail(email)
                    .then(() => alert('SuccessFully Sent'))
                    .catch((err) => setError(err));
            } else {
                setError('Email contain invalid values');
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className=" w-full p-3 text-center ">
            <h1 className="text-3xl text-center">Forget Password</h1>
            <form
                className="w-9/12 m-auto space-y-5 mt-3 p-4 bg-indigo-100 rounded-xl"
                onSubmit={ResetPassword}
            >
                <div className="">
                    <input
                        name="Email"
                        id="EmailId"
                        type="Email"
                        className="p-2 w-full text-xl border-4 border-grey-200"
                        ref={EmailField}
                        placeholder="Enter Email Here..."
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
                        Reset
                    </button>
                </div>
            </form>
            <div className="mt-2">
                <button
                    className="font-medium p-1 border- rounded"
                    onClick={(e) => {
                        e.preventDefault();
                        setform('Login');
                    }}
                >
                    Login
                </button>
            </div>
        </div>
    );
}
