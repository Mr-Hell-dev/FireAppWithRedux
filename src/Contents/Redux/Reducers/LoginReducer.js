const initialStateForLogin = {
    isLoading: false,
    LoggedIn: false,
    User: {},
    Err: '',
};

const LoginReducer = (state = initialStateForLogin, action) => {
    switch (action.type) {
        case 'LOGIN/BEGIN_LOGIN_REQUEST_WITH_EMAIL_PASSWORD':
            return {
                ...state,
                isLoading: true,
                LoggedIn: false,
            };
        case 'LOGIN/LOGIN_REQUEST_SUCCESS_WITH_EMAIL_PASSWORD':
            return {
                ...state,
                isLoading: false,
                User: action.UserObj.user,
                Err: '',
                LoggedIn: true,
            };
        case 'LOGIN/LOGIN_REQUEST_FAILURE_WITH_EMAIL_PASSWORD':
            return {
                ...state,
                isLoading: false,
                User: '',
                Err: action.ErrorObj.code,
            };
        //Logout Actions

        case 'LOGIN/BEGIN_LOGOUT_REQUEST_WITH_EMAIL_PASSWORD':
            return {
                ...state,
                isLoading: true,
                LoggedIn: true,
            };
        case 'LOGIN/LOGOUT_REQUEST_SUCCESS_WITH_EMAIL_PASSWORD':
            return {
                ...state,
                User: undefined,
                isLoading: false,
                LoggedIn: false,
            };
        case 'LOGIN/LOGOUT_REQUEST_FAILURE_WITH_EMAIL_PASSWORD':
            return {
                ...state,
                isLoading: false,
                LoggedIn: true,
                Err: action.ErrorObj.code,
            };
        default:
            return { ...state };
    }
};

export default LoginReducer;
