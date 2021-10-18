import { auth } from '../../../Firebase';
import { signOut } from 'firebase/auth';

export const Begin_Logout_Request_With_Email_Password = () => {
    return {
        type: 'LOGIN/BEGIN_LOGOUT_REQUEST_WITH_EMAIL_PASSWORD',
    };
};

export const Logout_Request_success_With_Email_Password = () => {
    return {
        type: 'LOGIN/LOGOUT_REQUEST_SUCCESS_WITH_EMAIL_PASSWORD',
    };
};

export const Logout_Request_Failure_With_Email_Password = (err) => {
    return {
        type: 'LOGIN/LOGOUT_REQUEST_FAILURE_WITH_EMAIL_PASSWORD',
        ErrorObj: err,
    };
};

export const SignOutEPWithRedux = () => (dispatch) => {
    dispatch(Begin_Logout_Request_With_Email_Password());
    signOut(auth)
        .then(() =>
            dispatch(Logout_Request_success_With_Email_Password()),
        )
        .catch((err) => {
            dispatch(Logout_Request_Failure_With_Email_Password(err));
        });
};
