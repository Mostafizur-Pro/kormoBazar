import React, { useState } from "react";
import { TextField, Button, Box, Typography, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import JobFormAPI from "../hooks/JobFormAPI/JobFormAPI";

const JobForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [salary, setSalary] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const categories = [
    "Digital Marketing",
    "HR & Administration",
    "Management",
    "Engineering",
    "Creative",
    "Sales & Marketing",
    "Accounts",
    "Development",
  ];

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const jobData = { title, description, company, location, category, salary };

  //   try {
  //     const response = await JobFormAPI.post("/jobs/create-job", jobData);
  //     if (response.status === 201) {
  //       setSuccessMessage("Job post created successfully!");
  //       setTitle("");
  //       setDescription("");
  //       setCompany("");
  //       setLocation("");
  //       setCategory("");
  //       setSalary("");
  //       setErrorMessage("");
  //     }
  //   } catch (error) {
  //     console.error("Error creating job:", error);
  //     setErrorMessage("Failed to create job post.");
  //     setSuccessMessage("");
  //   }
  // };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Create Job Post
      </Typography>
      <Box component="form" 
      // onSubmit={handleSubmit}
      >
        <TextField
          label="Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          label="Description"
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          margin="normal"
          required
          multiline
          rows={4}
        />
        <TextField
          label="Company"
          fullWidth
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          label="Location"
          fullWidth
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          margin="normal"
          required
        />
        <FormControl fullWidth margin="normal" required>
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            label="Category"
          >
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Salary"
          fullWidth
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          margin="normal"
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Create Job
        </Button>
        {successMessage && (
          <Typography variant="body1" color="success.main" sx={{ mt: 2 }}>
            {successMessage}
          </Typography>
        )}
        {errorMessage && (
          <Typography variant="body1" color="error.main" sx={{ mt: 2 }}>
            {errorMessage}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default JobForm;
