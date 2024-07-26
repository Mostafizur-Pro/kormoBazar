import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import banner from "../../../assets/home/banner/banner.jpg";

const BannerContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "60vh",
  // backgroundImage: 'url(../../../assets/home/banner/banner.jpg)', // Replace with the path to your image
  backgroundImage: `url(${banner})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  textAlign: "center",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.3)",
  },
}));

const BannerContent = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  maxWidth: "600px",
}));

const HomePageBanner = () => {
  return (
    <BannerContainer>
      <BannerContent>
        <Typography variant="h3" gutterBottom>
          Welcome to Our Website
        </Typography>
        <Typography variant="h6" paragraph>
          Discover our latest features and explore new opportunities with us.
        </Typography>
        <Button variant="contained" color="primary">
          Learn More
        </Button>
      </BannerContent>
    </BannerContainer>
  );
};

export default HomePageBanner;
