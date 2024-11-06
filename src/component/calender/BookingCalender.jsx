import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./BookingCalender.css";

const BookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("07:00 AM");
  const [bookedDates, setBookedDates] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [isBooking, setIsBooking] = useState(false);
  const [conflictError, setConflictError] = useState("");

  // Form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  // Use navigate to handle redirect after booking
  const navigate = useNavigate();

  // Utility function to format time to AM/PM format
  const formatTimeToAMPM = (hours, minutes) => {
    const period = hours >= 12 ? "PM" : "AM";
    let formattedHours = hours % 12; // Convert to 12-hour format
    formattedHours = formattedHours ? formattedHours : 12; // Hour 0 should be 12
    const formattedMinutes = minutes.toString().padStart(2, "0");
    return `${formattedHours}:${formattedMinutes} ${period}`;
  };

  // Utility function to generate time slots from 7:00 AM to 7:00 PM with an interval of 1 hour
  const generateTimeSlots = (startTime, endTime) => {
    const slots = [];
    let currentTime = new Date(startTime);

    while (currentTime <= new Date(endTime)) {
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const formattedTime = formatTimeToAMPM(hours, minutes);
      slots.push(formattedTime);

      currentTime.setHours(hours);
      currentTime.setMinutes(minutes + 60); // Increment by 1 hour
    }

    return slots;
  };

  // Fetch booked dates from the backend
  useEffect(() => {
    const fetchBookedDates = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/booked-dates"
        );
        if (Array.isArray(response.data)) {
          setBookedDates(response.data);
        }
      } catch (error) {
        console.error("Error fetching booked dates:", error);
        setBookedDates([]);
      }
    };
    fetchBookedDates();
  }, []);

  // Update available time slots when a date is selected
  useEffect(() => {
    if (!selectedDate) return;

    const selectedDateString = selectedDate.toDateString();

    // Find all booked times for the selected date
    const bookedTimes = bookedDates
      .filter((booking) => booking.date === selectedDateString)
      .map((booking) => booking.time);

    // Generate time slots from 7:00 AM to 7:00 PM
    const generatedSlots = generateTimeSlots(
      "2024-01-01 07:00",
      "2024-01-01 19:00"
    );

    // Filter out booked times from the list of all time slots
    const available = generatedSlots.filter(
      (time) => !bookedTimes.includes(time)
    );
    setAvailableTimes(available);
  }, [selectedDate, bookedDates]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setConflictError(""); // Reset conflict error when a new date is selected
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBookDate = async () => {
    if (
      !selectedDate ||
      !selectedTime ||
      !formData.name ||
      !formData.email ||
      !formData.address ||
      !formData.phone
    ) {
      setConflictError(
        "Please fill out all fields and select a valid date/time."
      );
      return;
    }

    const selectedDateString = selectedDate.toDateString();

    // Validate if the date and time slot are available
    const bookingConflict = bookedDates.some(
      (booking) =>
        booking.date === selectedDateString && booking.time === selectedTime
    );

    if (bookingConflict) {
      setConflictError("This time slot is already booked.");
      return;
    }

    // Save the booking to the backend
    try {
      const bookingData = {
        date: selectedDateString,
        time: selectedTime,
        name: formData.name,
        email: formData.email,
        address: formData.address,
        phone: formData.phone,
      };

      // Send booking data to backend
      await axios.post("http://localhost:5000/api/booked-dates", bookingData);

      // Update local booked dates to include this new booking
      setBookedDates((prev) => [...prev, bookingData]);

      setIsBooking(true);
      setConflictError(""); // Reset conflict error

      // Redirect to the home page after successful booking
      setTimeout(() => {
        navigate("/"); // Adjust the path to your home page
      }, 2000); // Wait for 2 seconds before redirect
    } catch (error) {
      console.error("Error saving the booking:", error);
      setConflictError("There was an error booking this date.");
    }
  };

  const isBooked = (date) => {
    if (!date) return false;

    const dateString = date.toDateString();
    return bookedDates.some((booking) => booking.date === dateString);
  };

  return (
    <div className="booking-container">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <h1 className="mb-4">Book A Session With Us</h1>

          <div className="col-md-7">
            <div className="calendar-wrapper">
              <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                tileClassName={({ date, view }) => {
                  if (view === "month" && isBooked(date)) {
                    return "booked";
                  }
                }}
              />
            </div>

            <div className="date-selection">
              {selectedDate ? (
                <p>You selected: {selectedDate.toDateString()}</p>
              ) : (
                <p>Please select a date to book.</p>
              )}

              {selectedDate && (
                <div>
                  <label htmlFor="time-slot">Select a time slot:</label>
                  {/* Display available times for the selected date */}
                  {availableTimes.length > 0 ? (
                    <div>
                      <select
                        id="time-slot"
                        value={selectedTime}
                        onChange={(e) => handleTimeChange(e.target.value)}
                      >
                        {availableTimes.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  ) : (
                    <p>No available time slots for this date.</p>
                  )}
                </div>
              )}

              <form>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Full Name"
                  className="form-control mb-3"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="Email"
                  className="form-control mb-3"
                />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleFormChange}
                  placeholder="Location"
                  className="form-control mb-3"
                />
                <input
                  type="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  placeholder="Phone"
                  className="form-control mb-3"
                />
              </form>

              <button
                onClick={handleBookDate}
                disabled={
                  !selectedTime || !availableTimes.includes(selectedTime)
                }
                className={`book-button ${
                  availableTimes.includes(selectedTime) ? "" : "booked"
                }`}
              >
                {availableTimes.includes(selectedTime)
                  ? "Book This Date"
                  : "No Slot Available"}
              </button>

              {conflictError && <p className="error">{conflictError}</p>}
            </div>

            {isBooking && (
              <p className="booking-confirmation">Your date has been booked!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCalendar;
