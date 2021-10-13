import React from 'react';
import { useAuthentication } from '../../Contents/AuthContext';

export default function Dashboard() {
    const isloggedIn =
        useAuthentication.curuser === undefined ? false : true;

    return (
        <>
            {isloggedIn ? (
                <h1 className="">This is dashboard boi</h1>
            ) : (
                <div>
                    You are not authorised to view this page please
                    login
                    {useAuthentication.curuser}
                </div>
            )}
        </>
    );
}
