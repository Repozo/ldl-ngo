import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import events from './pages/events';
import join from './pages/join';
import Aboutus from './components/Aboutus';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/events' component={events} />
          <Route path='/join' component={join} />
          <Route path='/about' exact component={Aboutus} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
