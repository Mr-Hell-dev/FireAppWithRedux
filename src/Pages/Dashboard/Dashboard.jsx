import React from 'react';
import { connect } from 'react-redux';

function Dashboard({ LoggedIn }) {
    return (
        <>
            {LoggedIn ? (
                <h1>This is Dashboard boi</h1>
            ) : (
                <h1>You are not allowed to be here</h1>
            )}
        </>
    );
}

const mapStateToProps = (state) => ({
    LoggedIn: state.LoginWithEmailPasswordReducer.LoggedIn,
});

export default connect(mapStateToProps, null)(Dashboard);
