import React, { useState } from 'react';
import Login from '../../Components/Authentication Forms/Login';
import Signup from '../../Components/Authentication Forms/Signup';

import sideimg from './images.jpg';
import PhoneNumber from '../../Components/Authentication Forms/PhoneNumber';
export default function Authentication({ Form }) {
    const [currentform, setcurrentform] = useState(Form);
    const [error, setError] = useState('');

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
                            <Login setform={setcurrentform} />
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
