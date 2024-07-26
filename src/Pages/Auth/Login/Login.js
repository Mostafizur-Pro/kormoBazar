import React from "react";
import { TextField, Button, FormControl, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <FormControl>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          margin="normal"
          required
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          margin="normal"
          required
        />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit
        </Button>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Don't have an account?{" "}
          <Link to="/signup" style={{ color: "blue" }}>
            Sign Up
          </Link>
        </Typography>
      </FormControl>
    </Box>
  );
};

export default Login;
