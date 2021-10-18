import { auth } from '../../../Firebase';
import { signOut } from 'firebase/auth';

export const Begin_Logout_Request_With_Email_Password = (state) => {
    return {
        type: 'BEGIN_LOGOUT_REQUEST_WITH_EMAIL_PASSWORD',
        pervState: state,
    };
};

export const Logout_Request_success_With_Email_Password = (state) => {
    return {
        type: 'LOGOUT_REQUEST_SUCCESS_WITH_EMAIL_PASSWORD',
        pervState: state,
    };
};

export const Logout_Request_Failure_With_Email_Password = (state, err) => {
    return {
        type: 'LOGOUT_REQUEST_FAILURE_WITH_EMAIL_PASSWORD',
        pervState: state,
        Err: err,
    };
};

export const SignOutEPWithRedux = () => (dispatch, getState) => {
    const { LoginWithEmailPasswordReducer: pervState } = getState();
    dispatch(Begin_Logout_Request_With_Email_Password(pervState));
    signOut(auth)
        .then(() =>
            dispatch(Logout_Request_success_With_Email_Password(pervState))
        )
        .catch((err) => {
            dispatch(
                Logout_Request_Failure_With_Email_Password(pervState, err)
            );
        });
};
