import React from "react";
import { motion } from "framer-motion";
import { Typography, Box, Stack } from "@mui/material";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import logo from "../../public/profile.png";
import signature from "../../public/signature.png";
import skill from "../../public/skill.png";
import SkillBar from "react-skillbars";


export default function About() {
  const skills = [
    {
      type: "HTML",
      level: 80,
      color: {
        bar: "linear-gradient(90deg,#000000 10%, #e34c26 35%, #f06529 60%,#ebebeb 80%,#ffffff 100%)",
        title: { text: "#fff", background: "#f06529" },
      },
    },
    {
      type: "CSS",
      level: 75,
      color: {
        bar: "linear-gradient(90deg,#2a8d08 10%, #3498db 35%, #0ab6f8 60%, #ffffff 100%)",
        title: { text: "#fff", background: "#2980b9" },
      },
    },
    {
      type: "Bootstrap",
      level: 80,
      color: {
        bar: "linear-gradient(90deg,#6624c0 35%, #5a68a5 75%, #ffffff 100%)",
        title: { text: "#fff", background: "#6624c0" },
      },
    },
    {
      type: "Tailwind",
      level: 85,
      color: {
        bar: "linear-gradient(90deg,#124e8c 25%, #3498db 55%, #0ab6f8 60%, #ffffff 100%)",
        title: { text: "#fff", background: "#2c6cbc" },
      },
    },
    {
      type: "Material UI",
      level: 70,
      color: {
        bar: "linear-gradient(90deg,#195dba 35%, #71c3f7 85%, #ffffff 100%)",
        title: { text: "#fff", background: "#195dba" },
      },
    },
    {
      type: "Javascript",
      level: 80,
      color: {
        bar: "linear-gradient(90deg, #f4e900 40%, #ffed00 60%, #ffffff 100%)",
        title: { text: "#fff", background: "#f7ea60" },
      },
    },
    {
      type: "Typescript",
      level: 65,
      color: {
        bar: "linear-gradient(90deg,#195dba 35%, #71c3f7 85%, #ffffff 100%)",
        title: { text: "#fff", background: "#195dba" },
      },
    },
    {
      type: "React",
      level: 85,
      color: {
        bar: "linear-gradient(90deg,#000000 10%, #4288d0 80%, #ffffff 100%)",
        title: { text: "#fff", background: "#124e8c" },
      },
    },
    {
      type: "Next JS",
      level: 60,
      color: {
        bar: "linear-gradient(90deg,#000000 40%, #ffffff 100%)",
        title: { text: "#fff", background: "#08203e" },
      },
    },
    {
      type: "Firebase",
      level: 75,
      color: {
        bar: "linear-gradient(90deg, #f4e900 40%, #ffed00 60%, #ffffff 100%)",
        title: { text: "#fff", background: "#FFC312" },
      },
    },
    {
      type: "Node JS",
      level: 85,
      color: {
        bar: "linear-gradient(90deg, #247a4d 25%, #0f971c 70%, #ffffff 100%)",
        title: { text: "#fff", background: "#0f971c" },
      },
    },
    {
      type: "Mongo DB",
      level: 80,
      color: {
        bar: "linear-gradient(90deg, #0f971c 40%, #1c3e35 80%, #ffffff 100%)",
        title: { text: "#fff", background: "#2a8d08" },
      },
    },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(90deg, #1e6c8e 0%, #918ca9 100%)",
        padding: "1rem",
      }}
    >
      {/* Hero Section */}
      <Box sx={{ margin: "auto", display: { sm: "flex" } }}>
        <motion.div
          initial={{
            opacity: 0,
            x: 300,
            rotate: -180,
            duration: 2,
            scale: 0.5,
          }}
          animate={{ opacity: 1, x: 0, rotate: 0, scale: 1, duration: 4 }}
          transition={{ duration: 0.5 }}
          style={{
            margin: "auto",
            padding: "1rem",
          }}
        >
          <Image className={styles.hero} src={logo} alt="Hero Picture" />
        </motion.div>
        <Box sx={{ margin: "auto" }}>
          <Typography
            variant="h5"
            sx={{
              color: "#fff",
              margin: { sm: "1rem" },
              fontSize: "1.2rem",
              textAlign: "justify",
            }}
          >
            As a web developer, I have worked on a variety of projects, from
            small personal projects to large enterprise applications. I have a
            strong understanding of front-end and back-end development, and I am
            able to work independently or as part of a team. I am also
            experienced in creating and managing databases, and I have a good
            understanding of RESTful API design. I am confident, enthusiastic,
            quick learner and always eager to learn new technologies and stay
            current with the latest web development trends.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              margin: { sm: "1rem" },
            }}
          >
            <Image src={signature} width={200} alt="Signature" />
          </Box>
        </Box>
      </Box>
      <div
        style={{
          height: "6px",
          background: "#7f0012",
          margin: "1rem",
          borderRadius: "10px",
        }}
      ></div>
      {/* Skills Section */}
      <Box sx={{display:"flex", color: "#fff", justifyContent:"center", alignItems:"center", marginBottom:"1.5rem"}}>
        <Typography variant="h4">My Skills</Typography>
        <Image src={skill} height={80} alt="Hero Picture" />
      </Box>
      <SkillBar skills={skills} />
    </div>
  );
}
