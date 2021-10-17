import React from 'react'


export default function Dashboard() {
  
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
