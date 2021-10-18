import React from 'react';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
function ProtectedRoutes({
    component: Component,
    isLoggedIn,
    ...restprops
}) {
    const LoggedIn = isLoggedIn;
    return (
        <>
            {console.log(isLoggedIn)}
            <Route
                {...restprops}
                component={(props) =>
                    LoggedIn ? (
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
    isLoggedIn: state.LoginWithEmailPasswordReducer.isLoggedIn,
});
export default connect(mapStateToProps, null)(ProtectedRoutes);
