import React from "react";
import { Box, Typography, TextField, Button, Container } from "@mui/material";

const ContactPage = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          my: 8,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Box
          component="form"
          sx={{
            width: "100%",
            maxWidth: "600px",
            mt: 4,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
          noValidate
        >
          <TextField label="Full Name" variant="outlined" required fullWidth />
          <TextField
            label="Email Address"
            variant="outlined"
            type="email"
            required
            fullWidth
          />
          <TextField label="Subject" variant="outlined" required fullWidth />
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            required
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            type="submit"
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactPage;
