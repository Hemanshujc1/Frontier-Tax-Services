import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 20
  },
  Email: {
    type: String,
    required: true,
  },
  Number: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 12
  },
  Subject: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 12
  },
  Message: {
    type: String,
    required: true,
    minlength: 20,
    maxlength: 200
  },
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default Contact;
