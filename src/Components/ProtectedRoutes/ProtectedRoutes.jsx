import React from 'react';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';

function ProtectedRoutes({
    component: Component,
    user,
    ...restprops
}) {
    const loggedin = user ? true : false;
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
    user: state.LoginReducer.User,
});

export default connect(mapStateToProps, null)(ProtectedRoutes);
