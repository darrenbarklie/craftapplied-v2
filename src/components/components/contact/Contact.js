import React, { Component } from 'react';

import ContactMessage from './ContactMessage';


class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h3>Contact</h3>
        <ContactMessage />
      </div>
    )
  }
}

export default Contact;
