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
        <Image className={styles.hero} src={logo} alt="Hero Picture" />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <Box sx={{ margin: "auto" }}>
          <Typography variant="h6">
            As a web developer, I am confident, enthusiastic, quick learner and
            want to utilize my knowledge and technical skills to serve a
            professional organization for my personal and career growth with
            true dedication, hard work, and commitment.
          </Typography>
        </Box>
      </motion.div>
      </Box>
    </div>
  );
}
