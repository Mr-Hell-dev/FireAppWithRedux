import { auth } from '../../../Firebase';
import { createUserWithEmailAndPassword } from '@firebase/auth';
export const Begin_SignUp_Request_With_Email_Password = () => ({
    type: 'SignUp/Begin_SignUp_Request_With_Email_Password',
});

export const Signup_Request_success_With_Email_Password = (user) => ({
    type: 'SignUp/SignUp_Request_success_With_Email_Password',
    UserObj: user,
});

export const Begin_Signup_Request_With_Email_Password = (err) => ({
    type: 'SignUp/Begin_Signup_Request_With_Email_Password',
    ErrObj: err,
});

export const SignUpEP = (email, password) => (dispatch) => {
    dispatch(Begin_SignUp_Request_With_Email_Password());
    createUserWithEmailAndPassword(auth, email, password)
        .then((user) =>
            dispatch(Signup_Request_success_With_Email_Password(user))
        )
        .catch((err) =>
            dispatch(Begin_Signup_Request_With_Email_Password(err))
        );
};
