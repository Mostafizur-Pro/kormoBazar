import React from "react";
import { TextField, Button, FormControl, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <FormControl>
        <Typography variant="h4" gutterBottom>
          Sign Up
        </Typography>
        <TextField
          label="Full Name"
          variant="outlined"
          margin="normal"
          required
        />
        <TextField label="Number" variant="outlined" margin="normal" required />
        <TextField label="Email" variant="outlined" margin="normal" required />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          margin="normal"
          required
        />
        <TextField
          label="Confirm Password"
          variant="outlined"
          type="password"
          margin="normal"
          required
        />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Sign Up
        </Button>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "blue" }}>
            Please Login
          </Link>
        </Typography>
      </FormControl>
    </Box>
  );
};

export default Signup;
