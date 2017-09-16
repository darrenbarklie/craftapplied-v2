import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from './Logo';
import Navigation from './Navigation';

class Header extends Component {
  render() {
    return (
      <header className="global">

        <Link to="/" className="logo">
          <Logo />
        </Link>

        <Navigation />

      </header>
    )
  }
}

export default Header;
