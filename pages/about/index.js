import React from "react";
import { motion } from "framer-motion";
import { Typography, Box, Stack } from "@mui/material";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import logo from "../../public/profile.png";

export default function About() {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #1e6c8e 0%, #918ca9 100%)",
        padding: "1rem",
      }}
    >
      <Box sx={{ margin: "auto", display: {sm:"flex"} }}>
      <motion.div
        initial={{ opacity: 0, x: 300,rotate: -180,duration: 2, scale: 0.5 }}
        animate={{ opacity: 1, x:0, rotate: 0, scale: 1, duration: 4 }}
        transition={{ duration: 0.5 }}
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}
        >
        <Image className={styles.hero} src={logo} alt="Hero Picture" />
        </motion.div>
        <Box sx={{ margin: "auto" }}>
          <Typography variant="h5"
            sx={{ color: "#fff", margin:{ sm:"1rem"}, fontSize: "1.2rem", textAlign: "justify" }}>
            As a web developer, I have worked on a variety of projects, from small personal projects to large enterprise applications. I have a strong understanding of front-end and back-end development, and I am able to work independently or as part of a team. I am also experienced in creating and managing databases, and I have a good understanding of RESTful API design. I am confident, enthusiastic, quick learner and always eager to learn new technologies and stay current with the latest web development trends.
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
