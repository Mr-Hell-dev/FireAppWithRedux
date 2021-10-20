const initialStateForLogin = {
    isLoading: false,
    LoggedIn: false,
    User: {},
    Err: '',
};

const LoginReducer = (state = initialStateForLogin, action) => {
    switch (action.type) {
        // Initailization

        case 'INITIAL/INITAILIZATION':
            return {
                ...state,
                User: action.UserObj.user,
                LoggedIn: true,
            };
        case 'INITIAL/INITAILIZATIONFAILURE':
            return {
                ...state,
                isLoading: false,
                User: '',
                LoggedIn: false,
                Err: action.ErrorObj,
            };

        //Login with Email And Password
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
                LoggedIn: false,
                Err: action.ErrorObj,
            };
        //Logout Actions

        case 'LOGOUT/BEGIN_LOGOUT_REQUEST_WITH_EMAIL_PASSWORD':
            return {
                ...state,
                isLoading: true,
                LoggedIn: true,
            };
        case 'LOGOUT/LOGOUT_REQUEST_SUCCESS_WITH_EMAIL_PASSWORD':
            return {
                ...state,
                User: undefined,
                isLoading: false,
                LoggedIn: false,
            };
        case 'LOGOUT/LOGOUT_REQUEST_FAILURE_WITH_EMAIL_PASSWORD':
            return {
                ...state,
                isLoading: false,
                LoggedIn: true,
                Err: action.ErrorObj,
            };

        // SignUP
        case 'SignUp/Begin_SignUp_Request_With_Email_Password':
            return {
                ...state,
                isLoading: true,
                LoggedIn: false,
            };

        case 'SignUp/SignUp_Request_success_With_Email_Password':
            return {
                ...state,
                User: action.UserObj.user,
                isLoading: false,
                LoggedIn: true,
            };
        case 'SignUp/Begin_Signup_Request_With_Email_Password':
            return {
                ...state,
                User: undefined,
                isLoading: false,
                LoggedIn: false,
                Err: action.ErrorObj,
            };
        default:
            return { ...state };
    }
};

export default LoginReducer;
