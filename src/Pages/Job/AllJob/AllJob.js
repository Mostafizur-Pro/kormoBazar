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

  const { user } = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/jobs");
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

  console.log("data", filterCategory);

  // Filter jobs based on category
  const filteredJobs = filterCategory
    ? jobs.filter((job) => job.category === filterCategory)
    : jobs;

  const handleEdit = (jobId) => {
    console.log(`Edit job with id: ${jobId}`);
    // Add your edit logic here, e.g., redirect to an edit page
  };

  const handleDelete = async (jobId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/v1/jobs/delete/${jobId}`
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
                    <IconButton
                      color="primary"
                      onClick={() => handleEdit(job._id)}
                    >
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
    </Container>
  );
};

export default AllJob;
