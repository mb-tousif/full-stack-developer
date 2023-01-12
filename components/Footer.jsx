import React from "react";
import { Box, Typography, styled } from "@mui/material";

const CustomTitle = styled(Typography)(({ theme }) => ({
  fontFamily:"Satisfy",
  fontWeight: 800,
  [theme.breakpoints.down("md")]: {
    fontWeight: 600,
  },
}));

const CustomDesc = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  [theme.breakpoints.down("md")]: {
    fontWeight: 500,
  },
}));

const CustomCopyright = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  [theme.breakpoints.down("md")]: {
    fontWeight: 400,
  },
}));

export default function Footer(){
  return (
    <Box sx={{ background: "linear-gradient(90deg, #1c1554 0%,#7c65a9 50%, #103783 90%)",color: "#fff", padding: 2, textAlign:"center" }}>
      <CustomTitle variant="h5">AZIZUL HAQUE TOUSIF</CustomTitle>
      <CustomDesc variant="h6">MERN Stack Web Developer</CustomDesc>
      <CustomCopyright variant="body1">
        All right reserved & Copyright &#169; {new Date().getFullYear()}.
      </CustomCopyright>
    </Box>
  );
}
