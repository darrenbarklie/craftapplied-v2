import React, { Component } from 'react';


class ContactMessage extends Component {
  render() {
    return (
      <form id="contact-message" className="contact-message"
        method="POST" action="/api/contact">

        <h6>Contact Message</h6>

        <label htmlFor="name">Name:
          <input name="name" type="text" />
        </label>

        <label htmlFor="email">Email:
          <input name="email" type="email" />
        </label>

        <label htmlFor="subject">Subject:
          <input name="subject" type="text" />
        </label>

        <label htmlFor="message">Message:
          <textarea name="message"></textarea>
        </label>

        <input type="submit" value="Send" />

      </form>
    )
  }
}

export default ContactMessage;


// handleSubmit(e) {
//   e.preventDefault();
//   let name = this.refs.name.value;
//   let email = this.refs.email.value;
//   let subject = this.refs.subject.value;
//   let message = this.refs.message.value;
// },
