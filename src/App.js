import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage.js'
import './style/global.scss'
import ContactsPage from './pages/ContactsPage.js'
import ContectDetaile from './pages/ContectDetaile.js'
import NavBar from './cmp/NavBar.js'
// import  './style/css/all.min.css'


// import global from '../src/assets/styles/global.scss'


function App() {
  return (
    <div className="App">
        <Router>
        <NavBar></NavBar>

          <Switch>
            <Route component={HomePage} path="/" exact></Route>
            <Route component={ContactsPage} path="/ContactsPage" exact></Route>
            <Route component={ContectDetaile} path="/ContactPage/:id" exact></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
