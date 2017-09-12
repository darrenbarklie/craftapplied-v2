import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

class ContactMessage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      'g-recaptcha-success': false
    };
  }

  onChange(response) {
    this.setState({
      'g-recaptcha-response': response,
      'g-recaptcha-success': true
    });
  }

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

        <ReCAPTCHA
          ref="recaptcha"
          sitekey="6LfIbzAUAAAAAN5eOOCMPFsdRSebPr423bl1UdlV"
          onChange={this.onChange.bind(this)}
        />

        <input type="submit" value="Send"
          
        />

      </form>
    )
  }
}

export default ContactMessage;
