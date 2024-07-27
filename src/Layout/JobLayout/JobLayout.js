import React from "react";
import { Outlet } from "react-router-dom";

import { Container, Grid, Box } from "@mui/material";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Footer from "../../Pages/Shared/Footer/Footer";
import JobSideBar from "../../Pages/Shared/JobSideBar/JobSideBar";

const JobLayout = () => {
  return (
    <div>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Box sx={{ padding: 2, border: "1px solid #ddd", borderRadius: 1 }}>
              <JobSideBar/>
            </Box>
          </Grid>
          <Grid item xs={12} md={9}>
            <Box sx={{ padding: 2 }}>
              <Outlet />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default JobLayout;
