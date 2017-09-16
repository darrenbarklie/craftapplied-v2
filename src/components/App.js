import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './globals/Layout';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Layout />
        </div>
      </Router>
    )
  }
}

export default App;
