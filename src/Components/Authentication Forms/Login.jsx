import { SignInMethod } from '@firebase/auth';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { SiFacebook } from 'react-icons/si';
import { useHistory } from 'react-router';
import { useAuthentication } from '../../Contents/AuthContext';
import { validateEmail, validatepassword } from '../../Validations';

export default function Login({ Errors, setform }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, seterror] = useState('');
    const AuthFunctions = useAuthentication();
    const history = useHistory();

    const ChangeHandler = (e) => {
        switch (e.target.id) {
            case 'EmailId':
                setEmail(e.target.value);
                break;
            case 'Password':
                setPassword(e.target.value);
                break;
            default:
                break;
        }
    };

    const SignInMethod = (e) => {
        e.preventDefault();
        seterror('');
        if (validateEmail(email) && validatepassword(password)) {
            AuthFunctions.SignInEP(email, password)
                .then((userdata) => history.push('/dashboard'))
                .catch((err) => {
                    console.log(err.code);
                    switch (err.code) {
                        case 'auth/invalid-email':
                        case 'auth/user-not-found':
                            seterror('Invalid Email');
                            break;
                        case 'auth/wrong-password':
                            seterror('Invalid Credentails');
                            break;
                        default:
                            seterror(
                                'Something went wrong Try again',
                            );
                            break;
                    }
                });
        } else {
            seterror(
                'Email and Password Field contains Incorrect values',
            );
        }
    };
    return (
        <div className=" w-full p-3 text-center ">
            <h1 className="text-3xl text-center">Login In</h1>
            <form className="w-9/12 m-auto space-y-5 mt-3 p-4 bg-indigo-100 rounded-xl">
                <div className="">
                    <input
                        name="Email"
                        id="EmailId"
                        type="Email"
                        className="p-2 w-full text-xl border-4 border-grey-200"
                        onChange={ChangeHandler}
                        placeholder="Enter Email Here..."
                        value={email}
                    />
                </div>
                <div className="">
                    <input
                        name="Password"
                        id="Password"
                        type="Password"
                        className="p-2 w-full text-xl border-4 border-grey-200"
                        onChange={ChangeHandler}
                        placeholder="Enter Password Here..."
                        value={password}
                    />
                </div>
                <div className="text-center text-red-400">
                    <p>{error}</p>
                </div>

                <div className="w-1/2 m-auto">
                    <button
                        className="bg-blue-300 hover:bg-blue-500 w-full text-xl font-bold text-white p-3 rounded"
                        type="Submit"
                        onClick={SignInMethod}
                    >
                        Login
                    </button>
                </div>
                <p className="">Or Sign in With</p>
                <div className="Icons w-full">
                    <div className="Icon w-1/2 space-x-5 m-auto">
                        <FcGoogle className=" w-10 h-10 inline cursor-pointer" />
                        <SiFacebook className="text-blue-500 w-10 cursor-pointer h-10 inline" />
                    </div>
                    <div className="mt-2">
                        <button className="font-medium p-1 rounded">
                            Sign In With Phone
                        </button>
                    </div>
                </div>
                <a
                    className="cursor-pointer"
                    onClick={(e) => {
                        e.preventDefault();
                        setform('SignUp');
                    }}
                >
                    Don't have an Account
                </a>
            </form>
        </div>
    );
}

Login.defaultProps = {
    email: '',
    password: '',
    Errors: '',
};
