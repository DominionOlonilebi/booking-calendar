const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Booking = require('./models/Booking');

// Initialize Express app
const app = express();

// Middleware
app.use(cors()); // Allow all origins (or specify frontend address for production)
app.use(bodyParser.json());

// MongoDB connection URI (for local MongoDB instance)
const mongoURI = 'mongodb://localhost:27017/bookings'; // Replace with your MongoDB URI if needed (e.g., MongoDB Atlas)
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// GET endpoint to fetch all booked dates
app.get('/api/booked-dates', async (req, res) => {
  try {
    const bookings = await Booking.find(); // Fetch all bookings from MongoDB
    res.json(bookings); // Send the bookings as a JSON response
  } catch (error) {
    console.error('Error fetching booked dates:', error);
    res.status(500).json({ error: 'Error fetching booked dates' });
  }
});

// POST endpoint to create a new booking
app.post('/api/booked-dates', async (req, res) => {
  const { date, time, name, email, address, phone } = req.body;

  // Validate if required fields are provided
  if (!date || !time || !name || !email || !phone) {
    return res.status(400).json({ error: 'Date, Time, Name, Email, and Phone are required.' });
  }

  try {
    // Check if the selected date and time are already booked
    const existingBooking = await Booking.findOne({ date, time });

    if (existingBooking) {
      return res.status(400).json({ error: 'This time slot is already booked.' });
    }

    // Create a new booking with form data
    const newBooking = new Booking({
      date,
      time,
      name,
      email,
      address, // address can be optional
      phone
    });

    // Save the new booking to MongoDB
    await newBooking.save();

    res.status(201).json({ message: 'Booking successful!' });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Error saving the booking.' });
  }
});

// Start the server on port 5000
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
