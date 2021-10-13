import { Switch, Route } from 'react-router';
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import Navbar from './Components/Navbar/Navbar';
import Authentication from './Pages/Authentication/Authentication';

function App() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/dashboard" component={Dashboard} />
                <Route
                    path="/login"
                    component={() => <Authentication Form="Login" />}
                />
                <Route
                    path="/signup"
                    component={() => <Authentication Form="SignUp" />}
                />
            </Switch>
        </>
    );
}

export default App;
