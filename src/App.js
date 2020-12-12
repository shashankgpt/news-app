import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HomePage from './components/Pages/HomePage/HomePage';
import LoginIn from './components/Pages/LogIn/LoginIn';
import SignUp from './components/Pages/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginIn} />
          <Route exact path="/Signup" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
