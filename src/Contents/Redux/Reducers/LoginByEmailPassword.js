const initialStateForLoginWithEmailPassword = {
    isLoggedIn: false,
    User: {},
    Err: '',
};

const LoginWithEmailPasswordReducer = (
    state = initialStateForLoginWithEmailPassword,
    action,
) => {
    switch (action.type) {
        case 'BEGIN_LOGIN_REQUEST_WITH_EMAIL_PASSWORD':
            return {
                ...state,
                isLoggedIn: false,
            };
        case 'LOGIN_REQUEST_SUCCESS_WITH_EMAIL_PASSWORD':
            return {
                ...state,
                isLoggedIn: true,
                User: action.payload.User,
                Err: '',
            };
        case 'LOGIN_REQUEST_FAILURE_WITH_EMAIL_PASSWORD':
            return {
                ...state,
                isLoggedIn: false,
                User: '',
                Err: action.payload.ErrorObj.code,
            };
        default:
            return { ...state };
    }
};

export default LoginWithEmailPasswordReducer;
