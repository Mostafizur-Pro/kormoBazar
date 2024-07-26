import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';

const AboutPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f9f9f9',
        padding: '40px 0',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom align="center">
          About Us
        </Typography>
        <Typography variant="h6" align="center" sx={{ mb: 4 }}>
          We are dedicated to providing the best services and solutions for our clients.
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: 1,
              }}
            >
              <Typography variant="h5" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1">
                Our mission is to deliver innovative and high-quality solutions that meet the evolving needs of our clients.
                We are committed to excellence and continuously strive to exceed expectations in all that we do.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: 1,
              }}
            >
              <Typography variant="h5" gutterBottom>
                Our Values
              </Typography>
              <Typography variant="body1">
                We believe in integrity, innovation, and teamwork. Our core values drive us to build strong relationships with our clients,
                embrace new challenges, and continuously improve our services.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutPage;
