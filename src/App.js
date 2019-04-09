import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import history from './components/history';
import Routes from './components/routes';

class App extends Component {
  render() {
    return(
      <React.Fragment>
        <Router history={history}>
          <Routes />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;