const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Contact Schema & model
const ContactMessageSchema = new Schema({
  time: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required']
  },
  subject: {
    type: String,
    required: [true, 'Subject is required']
  },
  message: {
    type: String,
    required: [true, 'Message is required']
  },
  source: {
    type: String,
    default: 'Contact Message'
  }
});

const ContactMessage = mongoose.model('contactMessage', ContactMessageSchema);

module.exports = ContactMessage;
