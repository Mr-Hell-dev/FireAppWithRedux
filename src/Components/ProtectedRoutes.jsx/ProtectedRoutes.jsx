import React from 'react';
import { Route, Redirect } from 'react-router';

export default function ProtectedRoutes({
    component: Component,
    ...restprops
}) {
    const loggedin = false;
    return (
        <>
            <Route
                {...restprops}
                component={(props) =>
                    loggedin ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to="/auth" />
                    )
                }
            />
        </>
    );
}
