// const mongoose = require('mongoose');

// const bookingSchema = new mongoose.Schema({
//   date: { type: String, required: true },
//   time: { type: String, required: true },
// });

// const Booking = mongoose.model('Booking', bookingSchema);

// module.exports = Booking;


// models/Booking.js
const mongoose = require('mongoose');

// Define the Booking schema with form data fields
const bookingSchema = new mongoose.Schema({
  date: { type: String, required: true },  // "Mon Oct 07 2024"
  time: { type: String, required: true },  // "10:00 AM"
  name: { type: String, required: true },  // User's name
  email: { type: String, required: true },  // User's email
  address: { type: String, required: true },  // User's address
  phone: { type: String, required: true },  // User's phone number
}, { timestamps: true });  // Adds createdAt and updatedAt fields

// Create and export the Booking model
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
