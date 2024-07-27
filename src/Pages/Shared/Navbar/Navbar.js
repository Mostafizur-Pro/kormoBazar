import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Container,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/Logo-2.png";
import AuthContext from "../../context/Authentication";

const Navbar = () => {
  const theme = useTheme();
  const { user, logout } = useContext(AuthContext);

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = useState(null);
  const [jobMenuAnchorEl, setJobMenuAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleJobMenuClick = (event) => {
    setJobMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setJobMenuAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Box component={Link} to="/" sx={{ flexGrow: 1 }}>
            <img src={logo} alt="Company Logo" style={{ height: "50px" }} />
          </Box>

          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuClick}
                sx={{ ml: 1 }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                sx={{ mt: 3 }}
              >
                <MenuItem component={Link} to="/" onClick={handleMenuClose}>
                  Home
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/about"
                  onClick={handleMenuClose}
                >
                  About
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/contact"
                  onClick={handleMenuClose}
                >
                  Contact
                </MenuItem>
                {user ? (
                  <>
                    <MenuItem onClick={handleJobMenuClick}>Jobs</MenuItem>
                    <Menu
                      anchorEl={jobMenuAnchorEl}
                      open={Boolean(jobMenuAnchorEl)}
                      onClose={handleMenuClose}
                      sx={{ mt: 3 }}
                    >
                      <MenuItem
                        component={Link}
                        to="/create-job"
                        onClick={handleMenuClose}
                      >
                        Create Job
                      </MenuItem>
                      <MenuItem
                        component={Link}
                        to="/jobs"
                        onClick={handleMenuClose}
                      >
                        All Job Posts
                      </MenuItem>
                    </Menu>
                    <MenuItem onClick={handleMenuClose}>
                      {user && <Typography>{user.name}</Typography>}
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        logout();
                        handleMenuClose();
                      }}
                    >
                      Logout
                    </MenuItem>
                  </>
                ) : (
                  <>
                    <MenuItem
                      component={Link}
                      to="/login"
                      onClick={handleMenuClose}
                    >
                      Login
                    </MenuItem>
                  </>
                )}
              </Menu>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/about">
                About
              </Button>
              <Button color="inherit" component={Link} to="/contact">
                Contact
              </Button>
              {user ? (
                <>
                  <Button
                    color="inherit"
                    aria-controls="job-menu"
                    aria-haspopup="true"
                    onClick={handleJobMenuClick}
                  >
                    Jobs
                  </Button>
                  <Menu
                    id="job-menu"
                    anchorEl={jobMenuAnchorEl}
                    open={Boolean(jobMenuAnchorEl)}
                    onClose={handleMenuClose}
                  >
                    <MenuItem
                      component={Link}
                      to="/jobs/create-job"
                      onClick={handleMenuClose}
                    >
                      Create Job
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to="/jobs"
                      onClick={handleMenuClose}
                    >
                      All Job Posts
                    </MenuItem>
                  </Menu>
                  <Typography sx={{ mr: 2 }}>{user.name}</Typography>
                  <Button color="inherit" onClick={logout}>
                    Logout
                  </Button>
                </>
              ) : (
                <Button color="inherit" component={Link} to="/login">
                  Login
                </Button>
              )}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
