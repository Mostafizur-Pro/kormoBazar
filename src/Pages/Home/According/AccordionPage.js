import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const AccordionPage = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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

  const handleCategoryClick = (category) => {
    navigate(`/jobs?category=${category}`); // Navigate to the URL for the selected category
  };

  const handleSeeAllClick = () => {
    navigate("/jobs"); // Navigate to the /jobs route
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 600, margin: "auto", padding: 2 }}>
      {categories.map((category, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography variant="h6">{category}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Content for {category}. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
              onClick={() => handleCategoryClick(category)}
            >
              View Jobs in {category}
            </Button>
          </AccordionDetails>
        </Accordion>
      ))}
      <Button
        variant="outlined"
        color="secondary"
        sx={{ marginTop: 2, marginLeft: 2 }}
        onClick={handleSeeAllClick}
      >
        See All Jobs
      </Button>
    </Box>
  );
};

export default AccordionPage;
