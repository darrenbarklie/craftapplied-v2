import React, { Component } from 'react';

import ContactMessage from './contact/ContactMessage';


class App extends Component {
  render() {
    return (
      <div className="app">
        <ContactMessage />
      </div>
    )
  }
}

export default App;
