import React from 'react';
import './App.css';
import Header from "./components/Header"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import Contacts from './components/Contacts';
// import Profile from './components/Profile';

function App() {
  return (
    // <BrowserRouter>
    //   <Header />
    //   <Route exact path = "/" component = {Home}/>
    //   <Route exact path = "/contacts/:id" component = {Contacts}/>
    // </BrowserRouter>
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/contacts/:id">
            <Contacts />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

//const mapDispatchToProps = (disp)

export default App
