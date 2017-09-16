import React, { Component } from 'react';


import Header from './Header';
import Stage from './Stage';
import Footer from './Footer';

//import ContactMessage from '../contact/ContactMessage';


class Layout extends Component {
  render() {
    return (
      <div className="layout">

        <Header />
        <Stage />
        <Footer />

      </div>
    )
  }
}

export default Layout;
