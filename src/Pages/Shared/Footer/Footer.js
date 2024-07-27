import React from "react";
import { Box, Typography, Link, Container, Grid } from "@mui/material";
import logo from "../../../assets/logo/Logo-1.png";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1976d2",
        color: "white",
        padding: "20px 0",
        marginTop: "auto",
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
     
            <Box component={Link} to="/" textAlign="center" sx={{ mt: 0 }}>
              <img src={logo} alt="Company Logo" style={{ height: "150px",  }} />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Link
              href="mailto:mostafizur0195@gmail.com"
              color="inherit"
              sx={{ display: "block", mb: 1 }}
            >
              Email Us
            </Link>
            <Link
              href="/about"
              color="inherit"
              sx={{ display: "block", mb: 1 }}
            >
              About Us
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Link
              target="_blank"
              href="https://www.facebook.com/mostafizur.proo"
              color="inherit"
              sx={{ display: "block", mb: 1 }}
            >
              Facebook
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/mostafizur-pro/"
              color="inherit"
              sx={{ display: "block", mb: 1 }}
            >
              LinkedIn
            </Link>
          </Grid>
        </Grid>
        <Box textAlign="center" sx={{ mt: 4 }}>
          <Typography variant="body2" color="white">
            &copy; {new Date().getFullYear()} Kormo Bazaar. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
