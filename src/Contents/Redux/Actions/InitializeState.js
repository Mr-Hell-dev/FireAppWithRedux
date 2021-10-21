export const InitializeReduxState = (user) => ({
    type: 'INITIAL/INITAILIZATION',
    UserObj: user,
});
export const InitializeReduxStateFaliure = (err) => ({
    type: 'INITIAL/INITAILIZATIONFAILURE',
    ErrorObj: err,
});

export const InitializerRedux = () => (dispatch) => {
    const user = JSON.parse(localStorage.getItem('User'));
    if (user !== null) {
        dispatch(InitializeReduxState(user));
    } else {
        dispatch(
            InitializeReduxStateFaliure({
                code: 'authUser_Not_logged_in',
                message: 'You is not Logged in',
            })
        );
    }
};
