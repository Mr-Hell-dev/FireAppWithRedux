import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { SiFacebook } from 'react-icons/si';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { validateEmail, validatepassword } from '../../Validations';
import { SignInEPWithRedux } from '../../Contents/Redux/Actions/LoginAction';

const Login = ({ setform, LoginUser, errormsg }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, seterror] = useState('');

    const history = useHistory();

    const ChangeHandler = (e) => {
        switch (e.target.id) {
            case 'EmailId':
                setEmail(e.target.value);
                break;
            case 'Password':
                setPassword(e.target.value);
                break;
            default:
                break;
        }
    };

    // const LoginWithGoogle = (e) => {
    //     e.preventDefault();
    //     signInWithGoogle()
    //         .then((data) => history.push('/dashboard'))
    //         .catch((err) => {
    //             switch (err.code) {
    //             }
    //         });
    // };
    //not working
    // const LoginWithFacebook = (e) => {
    //     e.preventDefault();
    //     signInWithFaceBook()
    //         .then((data) => history.push('/dashboard'))
    //         .catch((err) => {
    //             switch (err.code) {
    //                 case 'auth/popup-closed-by-user':
    //                     seterror('Intentionally Closed popup window');
    //                     break;
    //                 default:
    //                     seterror(
    //                         'Something went wrong please try again',
    //                     );
    //                     break;
    //             }
    //         });
    // };

    // const SignInMethod = (e) => {
    //     e.preventDefault();
    //     seterror('');
    //     if (validateEmail(email) && validatepassword(password)) {
    //         SignInEP(email, password)
    //             .then((userdata) => history.push('/dashboard'))
    //             .catch((err) => {
    //                 console.log(err.code);
    //                 switch (err.code) {
    //                     case 'auth/invalid-email':
    //                     case 'auth/user-not-found':
    //                         seterror('Invalid Email');
    //                         break;
    //                     case 'auth/wrong-password':
    //                         seterror('Invalid Credentails');
    //                         break;
    //                     default:
    //                         seterror(
    //                             'Something went wrong Try again',
    //                         );
    //                         break;
    //                 }
    //             });
    //     } else {
    //         seterror(
    //             'Email and Password Field contains Incorrect values',
    //         );
    //     }
    // };

    const SignInEmailPasswordWithRedux = (e) => {
        e.preventDefault();
        if ((validateEmail(email), validatepassword(password))) {
            try {
                LoginUser(email, password);
                setTimeout(() => {
                    history.push('/dashboard');
                }, 3000);
            } catch (err) {
                seterror(err.message);
            }
        } else {
            seterror('Invalid email password value provided');
        }
    };

    return (
        <div className=" w-full p-3 text-center ">
            <h1 className="text-3xl text-center">Login In</h1>
            <form
                className="w-9/12 m-auto space-y-5 mt-3 p-4 bg-indigo-100 rounded-xl"
                onSubmit={SignInEmailPasswordWithRedux}
            >
                <div className="">
                    <input
                        name="Email"
                        id="EmailId"
                        type="Email"
                        className="p-2 w-full text-xl border-4 border-grey-200"
                        onChange={ChangeHandler}
                        placeholder="Enter Email Here..."
                        value={email}
                    />
                </div>
                <div className="">
                    <input
                        name="Password"
                        id="Password"
                        type="Password"
                        className="p-2 w-full text-xl border-4 border-grey-200"
                        onChange={ChangeHandler}
                        placeholder="Enter Password Here..."
                        value={password}
                    />
                </div>
                <div className="text-center text-red-400">
                    <p>{error}</p>
                </div>

                <div>
                    <button
                        className="font-medium cursor-pointer"
                        onClick={() => {
                            setform('ForgotPassword');
                        }}
                    >
                        Forgot Password?
                    </button>
                </div>

                <div className="w-1/2 m-auto">
                    <button
                        className="bg-blue-300 hover:bg-blue-500 w-full text-xl font-bold text-white p-3 rounded"
                        type="Submit"
                    >
                        Login
                    </button>
                </div>
                <p className="">Or Sign in With</p>
                <div className="Icons w-full">
                    <div className="Icon w-1/2 space-x-5 m-auto">
                        <FcGoogle
                            className=" w-10 h-10 inline cursor-pointer"
                            // onClick={LoginWithGoogle}
                        />
                        <SiFacebook
                            className="text-blue-500 w-10 cursor-pointer h-10 inline"
                            // onClick={LoginWithFacebook}
                        />
                    </div>
                    <div className="mt-2">
                        <button
                            className="font-medium p-1 border- rounded"
                            onClick={() => {
                                setform('Phone_Number');
                            }}
                        >
                            Sign In With Phone
                        </button>
                    </div>
                </div>
                <button
                    className="cursor-pointer"
                    onClick={(e) => {
                        e.preventDefault();
                        setform('SignUp');
                    }}
                >
                    Don't have an Account
                </button>
            </form>
        </div>
    );
};

Login.defaultProps = {
    email: '',
    password: '',
    Errors: '',
};

const mapDispatchToProps = (dispatch) => ({
    LoginUser: (email, password) =>
        dispatch(SignInEPWithRedux(email, password, dispatch)),
});

const mapStateToProps = (state) => ({
    errormsg: state.LoginReducer.Err.message,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
