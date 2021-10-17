import { createStore } from 'redux';
import rootReducer from './Contents/Redux/Reducers/RootReducer';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { compose } from 'redux';
import logger from 'redux-logger';
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk, logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
);
export default store;
