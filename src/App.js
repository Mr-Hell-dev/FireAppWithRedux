import { Switch, Route } from 'react-router';
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import Navbar from './Components/Navbar/Navbar';
import Authentication from './Pages/Authentication/Authentication';

import { Provider } from 'react-redux';
import store from './store';
import ProtectedRoutes from './Components/ProtectedRoutes.jsx/ProtectedRoutes';
function App() {
    return (
        <>
           
            <Provider store={store}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <ProtectedRoutes path="/dashboard" component={Dashboard} />
                    <Route
                        path="/auth"
                        component={() => <Authentication Form="Login" />}
                    />
                </Switch>
            </Provider>
            
        </>
    );
}

export default App;
