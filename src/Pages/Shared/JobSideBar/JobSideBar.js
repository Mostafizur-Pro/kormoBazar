import React from "react";
import { List, ListItem, ListItemText, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

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

const JobSideBar = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        padding: 2,
        height: "100vh",
        boxShadow: 3,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Categories
      </Typography>
      <List>
        <ListItem button component={Link} to={`/jobs`}>
          <ListItemText primary={"All Job Post"} />
        </ListItem>
        {categories.map((category) => (
          <ListItem
            button
            component={Link}
            to={`/jobs?category=${category}`}
            key={category}
          >
            <ListItemText primary={category} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default JobSideBar;
