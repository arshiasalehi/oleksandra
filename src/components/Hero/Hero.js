import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import './Hero.css';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const ballVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop"
      }
    }
  };

  return (
    <Box className="hero-container">
      <div className={`background-image ${isMobile ? 'mobile' : ''}`} />
      <Box className="hero-content">
        <motion.div
          className={`text-container ${isMobile ? 'mobile' : ''}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h2" className="hero-text left">
            Tennis with
          </Typography>
          
          <motion.div
            className="tennis-ball"
            animate="animate"
            variants={ballVariants}
          />

          <Typography variant="h2" className="hero-text right">
            Oleksandra
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Hero; 