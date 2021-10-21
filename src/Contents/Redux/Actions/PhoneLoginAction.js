import { auth } from '../../../Firebase';
import { signInWithPhoneNumber } from 'firebase/auth';

export const Begin_Login_Request_With_Phone_Number = () => {
    return {
        type: 'LOGIN/BEGIN_LOGIN_REQUEST_WITH_Phone_Number',
    };
};

export const Login_Request_success_With_Phone_Number = (user) => {
    return {
        type: 'LOGIN/LOGIN_REQUEST_SUCCESS_WITH_Phone_Number',
        UserObj: user,
    };
};

export const Login_Request_Failure_With_Phone_Number = (Err) => {
    return {
        type: 'LOGIN/LOGIN_REQUEST_FAILURE_WITH_Phone_Number',
        ErrorObj: Err,
    };
};

export const SignInPhoneWithRedux = (email, password) => (dispatch) => {
    dispatch(Begin_Login_Request_With_Phone_Number());
    signInWithPhoneNumber(auth, email, password)
        .then((user) => {
            localStorage.setItem('User', JSON.stringify(user));
            return dispatch(Login_Request_success_With_Phone_Number(user));
        })
        .catch((err) => {
            dispatch(Login_Request_Failure_With_Phone_Number(err));
        });
};
