import { auth } from '../../../Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const Begin_Login_Request_With_Email_Password = () => ({
    type: 'BEGIN_LOGIN_REQUEST_WITH_EMAIL_PASSWORD',
});

export const Login_Request_success_With_Email_Password = (user) => ({
    type: 'LOGIN_REQUEST_SUCCESS_WITH_EMAIL_PASSWORD',
    payload: { User: user },
});

export const Login_Request_Failure_With_Email_Password = (err) => ({
    type: 'LOGIN_REQUEST_FAILURE_WITH_EMAIL_PASSWORD',
    payload: { ErrorObj: err },
});

export const SignInEPWithRedux = async (
    email,
    password,
    dispatch,
) => {
    await dispatch(Begin_Login_Request_With_Email_Password());
    try {
        const user = await signInWithEmailAndPassword(
            auth,
            email,
            password,
        );
        await dispatch(
            Login_Request_success_With_Email_Password(user),
        );
    } catch (err) {
        await dispatch(
            Login_Request_Failure_With_Email_Password(err),
        );
    }
};
