import React, { useState,useMemo } from 'react';
import Login from '../../Components/Authentication Forms/Login';
import Signup from '../../Components/Authentication Forms/Signup';
import ForgotPassword from '../../Components/Authentication Forms/ForgotPassword';
import sideimg from './images.jpg';
import PhoneNumber from '../../Components/Authentication Forms/PhoneNumber';
export default function Authentication({ Form }) {
    const [currentform, setcurrentform] = useState(Form);
    const renderswitch = useMemo(() =>
    {
        console.log(currentform);
        switch (currentform) {
            case "Login":
                return <Login setform={setcurrentform} />
            case "SignUp":
                return <Signup setform={setcurrentform} />
            case "Phone_Number":
                return <PhoneNumber setform={setcurrentform} />
            case "ForgotPassword":
                return <ForgotPassword setform={setcurrentform}/>
            default:
                break;
        }
    },[currentform]);
    return (
        <>
            <div
                className={`flex w-screen h-screen bg-indigo-50 flex-${
                    currentform === 'Login' ? 'row' : 'row-reverse'
                } justify-evenly`}
            >
                <section className="w-1/2 h-full ">
                    {renderswitch}
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
