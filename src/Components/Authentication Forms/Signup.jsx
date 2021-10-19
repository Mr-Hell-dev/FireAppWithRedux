import React, { useState } from 'react';
import { validateEmail, validatepassword } from '../../Validations';
import { SignUpEP } from '../../Contents/Redux/Actions/SignUp';
import { connect } from 'react-redux';

import { useHistory } from 'react-router';
function Signup({ setform, CreateAccount, Err: errormsg }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [error, setError] = useState('');
    const history = useHistory();

    const SignupMethod = (e) => {
        e.preventDefault();
        setError('');
        if (
            validateEmail(email) &&
            validatepassword(password) &&
            password === confirmPassword
        ) {
            CreateAccount(email, password);
            setTimeout(() => {
                if (!errormsg) {
                    history.push('/dashboard');
                }
            }, 3000);
        } else {
            setError(
                'Password Field contains Incorrect values or Confirm password is not same'
            );
        }
    };
    const ChangeHandler = (e) => {
        switch (e.target.id) {
            case 'EmailId':
                setEmail(e.target.value);
                break;
            case 'Password':
                setPassword(e.target.value);
                break;
            case 'confirmPassword':
                setConfirmPassword(e.target.value);
                break;
            default:
                break;
        }
    };
    return (
        <div className=" w-full p-3 text-center ">
            <h1 className="text-3xl text-center">Sign up</h1>
            <form
                className="w-9/12 m-auto space-y-5 mt-3 p-4 bg-indigo-100 rounded-xl"
                onSubmit={SignupMethod}
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
                <div className="">
                    <input
                        name="Password"
                        id="confirmPassword"
                        type="text"
                        className="p-2 w-full text-xl border-4 border-grey-200"
                        onChange={ChangeHandler}
                        placeholder="Enter Confirm Password Here..."
                        value={confirmPassword}
                    />
                </div>
                <div className="text-center text-red-400">
                    <p>{error}</p>
                </div>

                <div className="w-1/2 m-auto">
                    <button
                        className="bg-blue-300 hover:bg-blue-500 w-full text-xl font-bold text-white p-3 rounded"
                        type="Submit"
                    >
                        Create Account
                    </button>
                </div>
                <button
                    className="cursor-pointer"
                    onClick={(e) => {
                        e.preventDefault();
                        setform('Login');
                    }}
                >
                    Already have an Account
                </button>
            </form>
        </div>
    );
}
const mapDispatchToProps = (dispatch) => ({
    CreateAccount: (email, password) => dispatch(SignUpEP(email, password)),
});

const mapStateToProps = (state) => ({
    Err: state.LoginReducer.Err,
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
