import React, { Component } from 'react';

class App extends Component {

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="app">
        <h1>App mounted</h1>
      </div>
    )
  }
}

export default App;
