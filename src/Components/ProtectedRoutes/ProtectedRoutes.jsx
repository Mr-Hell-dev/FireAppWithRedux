import React from 'react';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';

function ProtectedRoutes({ component: Component, LoggedIn, ...restprops }) {
    const loggedIn = LoggedIn;
    return (
        <>  
            <Route
                {...restprops}
                component={(props) =>
                    loggedIn ? (
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
    LoggedIn: state.LoginReducer.LoggedIn,
});
export default connect(mapStateToProps, null)(ProtectedRoutes);
