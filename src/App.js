import { Switch, Route } from 'react-router';
import { useEffect, useCallback, useMemo } from 'react';
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import Navbar from './Components/Navbar/Navbar';
import Authentication from './Pages/Authentication/Authentication';
import { InitializerRedux } from './Contents/Redux/Actions/InitializeState';
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie/es6';

function App({ InitializeState }) {
    useMemo(() => {
        InitializeState();
        return 1;
    }, []);
    return (
        <>
            <Navbar />

            <Switch>
                <Route path="/" exact component={Home} />
                <ProtectedRoutes path="/dashboard" component={Dashboard} />
                <Route
                    path="/auth"
                    component={() => <Authentication Form="Login" />}
                />
            </Switch>
        </>
    );
}
const mapDispatchToProps = (dispatch) => ({
    InitializeState: () => dispatch(InitializerRedux()),
});

export default connect(null, mapDispatchToProps)(App);
