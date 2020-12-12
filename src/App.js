import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './config/axios.config';

import HomePage from './components/Pages/HomePage/HomePage';
import LoginIn from './components/Pages/LogIn/LoginIn';
import SignUp from './components/Pages/SignUp/SignUp';
import Profile from './components/Pages/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
