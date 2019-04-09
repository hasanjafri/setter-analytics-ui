import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import history from './components/history';
import NavBar from './components/navbar';
import Routes from './components/routes';

class App extends Component {
  render() {
    return(
      <React.Fragment>
        <Router history={history}>
          <React.Fragment>
            <NavBar />
            <Routes />
          </React.Fragment>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;