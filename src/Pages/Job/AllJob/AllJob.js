import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  CircularProgress,
  Container,
  IconButton,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useLocation } from "react-router-dom";
import AuthContext from "../../context/Authentication";

const AllJob = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [currentJob, setCurrentJob] = useState(null);
  const [editJobData, setEditJobData] = useState({
    title: "",
    description: "",
    company: "",
    location: "",
    category: "",
    salary: "",
  });

  const { user } = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          "https://kormo-bazar-server1.vercel.app/api/v1/jobs"
        );
        if (response.data.success) {
          setJobs(response.data.data);
        } else {
          setError("Failed to fetch jobs.");
        }
      } catch (error) {
        setError("An error occurred while fetching jobs.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Extract query parameters
  const queryParams = new URLSearchParams(location.search);
  const filterCategory = queryParams.get("category");

  // Filter jobs based on category
  const filteredJobs = filterCategory
    ? jobs.filter((job) => job.category === filterCategory)
    : jobs;

  const handleEdit = (job) => {
    setCurrentJob(job);
    setEditJobData({
      title: job.title,
      description: job.description,
      company: job.company,
      location: job.location,
      category: job.category,
      salary: job.salary,
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditJobData({ ...editJobData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      // Debugging: log the data being sent
      //   console.log('Updating job with data:', editJobData, currentJob._id);

      const response = await axios.patch(
        `https://kormo-bazar-server1.vercel.app/api/v1/jobs/update/${currentJob._id}`,
        editJobData
      );

      if (response.status === 200) {
        setJobs(
          jobs.map((job) =>
            job._id === currentJob._id ? { ...job, ...editJobData } : job
          )
        );
        handleClose();
        alert("Job updated successfully!");
      } else {
        alert("Failed to update job. Status code: " + response.status);
      }
    } catch (error) {
      // Debugging: log the error details
      console.error(
        "Error updating job:",
        error.response ? error.response.data : error.message
      );
      alert("An error occurred while updating the job.");
    }
  };

  const handleDelete = async (jobId) => {
    try {
      const response = await axios.delete(
        `https://kormo-bazar-server1.vercel.app/api/v1/jobs/delete/${jobId}`
      );
      if (response.status === 200) {
        setJobs(jobs.filter((job) => job._id !== jobId));
        alert("Job deleted successfully!");
      } else {
        alert("Failed to delete job.");
      }
    } catch (error) {
      alert("An error occurred while deleting the job.");
    }
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        {filterCategory ? `${filterCategory} Job Posts` : "All Job Posts"}
      </Typography>
      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography variant="body1" color="error">
          {error}
        </Typography>
      ) : filteredJobs.length === 0 ? (
        <Typography variant="body1">No jobs found.</Typography>
      ) : (
        <Grid container spacing={4}>
          {filteredJobs.map((job) => (
            <Grid item xs={12} sm={6} md={4} key={job._id}>
              <Card
                sx={{ height: 300, display: "flex", flexDirection: "column" }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="h2">
                    {job.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary" paragraph>
                    {job.description}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Company:</strong> {job.company}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Location:</strong> {job.location}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Category:</strong> {job.category}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Salary:</strong> ${job.salary}
                  </Typography>
                </CardContent>
                {user && job.user_id === user._id && (
                  <Box
                    sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}
                  >
                    <IconButton color="primary" onClick={() => handleEdit(job)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(job._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Edit Job Modal */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Job</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            name="title"
            value={editJobData.title}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            name="description"
            value={editJobData.description}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
          <TextField
            label="Company"
            name="company"
            value={editJobData.company}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Location"
            name="location"
            value={editJobData.location}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Category"
            name="category"
            value={editJobData.category}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Salary"
            name="salary"
            value={editJobData.salary}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AllJob;
