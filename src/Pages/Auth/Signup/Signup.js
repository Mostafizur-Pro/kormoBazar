import React, { useState } from "react";
import { TextField, Button, FormControl, Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "https://kormo-bazar-server1.vercel.app/api/v1/users/signup",
        {
          name: formData.name,
          phoneNumber: formData.phoneNumber,
          email: formData.email,
          password: formData.password,
        }
      );
      // console.log(response.data);
      if(response.data){
        navigate("/login");
      }
    } catch (error) {
      console.error("There was an error signing up!", error);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <FormControl component="form" onSubmit={handleSubmit}>
        <Typography variant="h4" gutterBottom>
          Sign Up
        </Typography>
        <TextField
          name="name"
          label="Full Name"
          variant="outlined"
          margin="normal"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          name="phoneNumber"
          label="Number"
          variant="outlined"
          margin="normal"
          required
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          margin="normal"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          name="password"
          label="Password"
          variant="outlined"
          type="password"
          margin="normal"
          required
          value={formData.password}
          onChange={handleChange}
        />
        <TextField
          name="confirmPassword"
          label="Confirm Password"
          variant="outlined"
          type="password"
          margin="normal"
          required
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          type="submit"
        >
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
