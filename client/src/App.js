import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage'
import Restaurant from './components/Restaurant'


class App extends Component {

  render() {
    return (
      <Router className="App">
        <div>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/restaurant' component={Restaurant} />
        </div>
      </Router>
    );
  }
}

export default App;
