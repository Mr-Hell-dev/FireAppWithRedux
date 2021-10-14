import React from 'react'
import { useAuthentication } from '../../Contents/AuthContext'

export default function Dashboard() {
    const { loggedin: isloggedin } = useAuthentication()
    return (
        <>
            {isloggedin ? (
                <h1 className="">This is dashboard boi</h1>
            ) : (
                <div>You are not authorised to view this page please login</div>
            )}
        </>
    )
}
