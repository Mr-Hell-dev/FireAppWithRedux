import React from 'react';
import { Route, Redirect } from 'react-router';
import { useAuthentication } from '../../Contents/AuthContext';

export default function ProtectedRoutes({
    component: Component,
    ...restprops
}) {
    const { loggedin } = useAuthentication();
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
