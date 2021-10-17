import { auth } from '../../../Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const Begin_Login_Request_With_Email_Password = () => {
    return {
        type: 'BEGIN_LOGIN_REQUEST_WITH_EMAIL_PASSWORD',
    };
};

export const Login_Request_success_With_Email_Password = (user) => {
    return {
        type: 'LOGIN_REQUEST_SUCCESS_WITH_EMAIL_PASSWORD',
        UserObj: user,
    };
};

export const Login_Request_Failure_With_Email_Password = (err) => {
    return {
        type: 'LOGIN_REQUEST_FAILURE_WITH_EMAIL_PASSWORD',
        ErrorObj: err,
    };
};

export const SignInEPWithRedux = async (
    email,
    password,
    dispatch,
) => {
    dispatch(Begin_Login_Request_With_Email_Password());
    await signInWithEmailAndPassword(auth, email, password)
        .then((user) =>
            dispatch(Login_Request_success_With_Email_Password(user)),
        )
        .catch((err) => {
            console.log(err);
            return dispatch(
                Login_Request_Failure_With_Email_Password(err),
            );
        });
};
