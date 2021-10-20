import React from 'react';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';

function ProtectedRoutes({
    component: Component,
    User,
    isLoggedIn,
    ...restprops
}) {
    const loggedin = isLoggedIn;
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

const mapStateToProps = (state) => ({
    isLoggedIn: state.LoginReducer.LoggedIn,
    User: state.LoginReducer.User,
});

export default connect(mapStateToProps, null)(ProtectedRoutes);
