const initialStateForLoginWithEmailPassword = {
    isLoading: false,
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
                isLoading: true,
            };
        case 'LOGIN_REQUEST_SUCCESS_WITH_EMAIL_PASSWORD':
            return {
                ...state,
                isLoading: false,
                User: action.UserObj.user,
                Err: '',
            };
        case 'LOGIN_REQUEST_FAILURE_WITH_EMAIL_PASSWORD':
            return {
                ...state,
                isLoading: false,
                User: '',
                Err: action.ErrorObj.code,
            };
        default:
            return { ...state };
    }
};

export default LoginWithEmailPasswordReducer;
