import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <nav className="navigation-primary">
        <NavLink to="/about" activeClassName="active">About</NavLink>
        {/* <NavLink to="/works" activeClassName="active">Works</NavLink> */}
        <NavLink to="/services" activeClassName="active">Services</NavLink>
        {/* <NavLink to="/blog" activeClassName="active">Blog</NavLink> */}
        <NavLink to="/contact" className="cta" activeClassName="active">Contact</NavLink>
      </nav>
    )
  }
}

export default Navigation;
