import React, { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import Calendar from 'react-calendar';
import { motion } from 'framer-motion';
import 'react-calendar/dist/Calendar.css';
import './Booking.css';

const Booking = () => {
  const [date, setDate] = useState(new Date());

  return (
    <Box component="section" className="booking-section" id="booking">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h3" align="center" gutterBottom>
            Book a Session
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Select a date for your tennis lesson. Further booking details will be implemented soon.
          </Typography>
          
          <Box className="calendar-container">
            <Calendar
              onChange={setDate}
              value={date}
              minDate={new Date()}
              className="custom-calendar"
            />
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Booking; 