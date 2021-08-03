import './App.css';
import Hero from './components/Hero/Hero';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import { AuthProvider } from './config/AuthContext';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './config/PrivateRoute';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL + "#"}>
      <AuthProvider>
        <div className="App">
          <Switch>
              <PrivateRoute exact path="/" component={Hero} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
