import { auth } from '../../../Firebase';
export const InitializeReduxState = (user) => ({
    type: 'INITIAL/INITAILIZATION',
    UserObj: user,
});
export const InitializeReduxStateFaliure = (err) => ({
    type: 'INITIAL/INITAILIZATIONFAILURE',
    ErrorObj: err,
});

export const InitializerRedux = () => (dispatch) => {
    console.log(auth);
    console.log(auth['currentUser']);
    if (auth.currentUser !== null) {
        dispatch(InitializeReduxState(auth.currentUser));
    } else {
        dispatch(
            InitializeReduxStateFaliure({
                code: 'authUser_Not_logged_in',
                message: 'You is not Logged in',
            })
        );
    }
};
