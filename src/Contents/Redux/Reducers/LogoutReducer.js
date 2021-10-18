const initialStateForLogoutWithEmailPassword = {
    isLoading: false,
    LoggedIn: false,
    Err: '',
};

const LogoutReducer = (
    state = initialStateForLogoutWithEmailPassword,
    action
) => {
    switch (action.type) {
        case 'BEGIN_LOGOUT_REQUEST_WITH_EMAIL_PASSWORD':
            return {
                ...state,
                isLoading: true,
                LoggedIn: true,
            };
        case 'LOGOUT_REQUEST_SUCCESS_WITH_EMAIL_PASSWORD':
            return {
                ...state,
                User: {},
                isLoading: false,
                LoggedIn: false,
            };
        case 'LOGOUT_REQUEST_FAILURE_WITH_EMAIL_PASSWORD':
            return {
                ...state,
                isLoading: false,
                LoggedIn: true,
                Err: action.Err.code,
            };
        default:
            return { ...state };
    }
};

export default LogoutReducer;
