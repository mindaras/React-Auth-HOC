import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import { Route } from 'react-router-dom';
import Resources from './Resources';
import RequireAuth from './RequireAuth';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route path="/resources" component={RequireAuth(Resources)} />
      </div>
    );
  }
}

export default App;
