import React from "react";
import { Box, Typography, styled } from "@mui/material";

const CustomTitle = styled(Typography)(({ theme }) => ({
  color: "#273c75",
  fontWeight: 800,
  [theme.breakpoints.down("md")]: {
    fontWeight: 600,
  },
}));

const CustomDesc = styled(Typography)(({ theme }) => ({
  color: "#273c75",
  fontWeight: 700,
  [theme.breakpoints.down("md")]: {
    fontWeight: 500,
  },
}));

const CustomCopyright = styled(Typography)(({ theme }) => ({
  color: "#273c75",
  fontWeight: 600,
  [theme.breakpoints.down("md")]: {
    fontWeight: 400,
  },
}));

export default function Footer() {
  return (
    <Box sx={{ background: "rgba(17, 85, 130, .7)", padding: 2 }}>
      <CustomTitle variant="h5">AZIZUL HAQUE TOUSIF</CustomTitle>
      <CustomDesc variant="h6">MERN Stack Web Developer</CustomDesc>
      <CustomCopyright variant="body1">
        Copyright &#169; {new Date().getFullYear()} - All right reserved.
      </CustomCopyright>
    </Box>
  );
}
