import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import events from './pages/events';
import join from './pages/join';
import Camps from './pages/Camps';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/events' component={events} />
          <Route path='/Camps' component={Camps} />
          <Route path='/join' component={join} />
        </Switch>
      </Router>
    </>
  );
}

export default App;