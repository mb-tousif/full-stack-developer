import { Typography, Box, Button, TextField, FormGroup } from "@mui/material";
import Image from "next/image";
import logo from "../public/my.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { BsMedium } from "react-icons/bs";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useForm } from "@formspree/react";
import { MdOutgoingMail } from "react-icons/md";
import feedback from "../public/feedback.png";
import contact from "../public/contactMe.png";
import { useState } from "react";
import SendIcon from '@mui/icons-material/Send';

export default function Home() {
  const [state, handleSubmit] = useForm("mgedqyov");
  const [error, showError] = useState(false);
  const [text] = useTypewriter({
    words: [
      " Web Developer",
      " MERN Stack Dev.",
      " Full Stack Dev.",
      " React Developer",
    ],
    loop: false,
    typeSpeed: 300,
    deleteSpeed: 200,
    delaySpeed: 900,
  });

  if (state.succeeded) {
    return (
      <p className="text-xl font-semiBold text-center text-primary m-3">
        Thanks for your Feedback!
      </p>
    );
  }

  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, hsla(248, 21%, 15%, 1) 0%, hsla(250, 14%, 61%, 1) 100%)",
      }}
    >
      <Box
        container
        sx={{
          display: {
            sm: "flex",
            justifyContent: "space-around"
          },
          padding: {
            xs: "2rem",
          },
        }}
      >
        <Box sx={{ margin: "auto" }}>
          <Typography
            variant="h3"
            sx={{ color: "#d9dace", fontWeight: "bold" }}
          >
            Dev. Tousif
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "#fff", marginBottom: "1rem", fontSize: "1.8rem" }}
          >
            📜
            {text}
            <Cursor cursorStyle="✍🏾" />
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#fff",
              marginBottom: "1rem",
              marginRight: { sm: "1rem" },
              fontSize: "1.2rem",
              textAlign: "justify",
            }}
          >
            with experience in building scalable and responsive web
            applications. If you are looking for a skilled MERN stack web
            developer, feel free to check my resume and reach at me.
          </Typography>
          <div style={{ display: "flex", justifyContent: "space-around", width:"300px", margin:"auto", paddingBottom:"1.5rem" }}>
            <div>
              <GitHubIcon />
            </div>
            <div>
              <LinkedInIcon />
            </div>
            <div>
              <BsMedium />
            </div>
            <div>
              <TwitterIcon />
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              marginBottom: "1rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{
                color: "#809b0e",
                textTransform: "none",
                border: "1px solid #e5e7ec",
                padding: "8px 0px",
                fontWeight: "bold",
                fontSize: "1.3rem",
                width: { xs: "120px", sm: "180px", md: "220px" },
                boxShadow: "inset 0 0 0 0 #7c65a9",
                transition: "ease-out 0.5s",
                "&:hover": {
                  color: "white",
                  boxShadow: {
                    xs: "inset 120px 0 0 0 #43470b",
                    sm: "inset 180px 0 0 0 #43470b",
                    md: "inset 220px 0 0 0 #43470b",
                  },
                  border: "1px solid #215600",
                },
              }}
            >
              Resume
            </Button>
          </motion.div>
        </Box>
        <Box
          sx={{
            backgroundImage: "url('/color-sharp.png')",
            border: "2px solid #074170",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem",
            }}
          >
            <Image className={styles.hero} src={logo} alt="Hero Picture" />
          </motion.div>
        </Box>
      </Box>
      <div
        style={{
          height: "6px",
          background: "linear-gradient(90deg, #e4e7e4 0%, #0a1647 100%)",
          margin: "1rem",
          borderRadius: "10px",
        }}
      ></div>
      <Box
        sx={{
          display: "flex",
          color: "#fff",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "1.5rem",
        }}
      >
        <Typography sx={{fontSize:{sm:"2rem", md:"3rem", xs:"1.3"}}}>Drop Your Message</Typography>
        <Image src={contact} height={80} alt="Hero Picture" />
      </Box>
      <Box sx={{display:{sm:"flex", justifyContent:"center"}}}>
        <Image src={feedback}  alt="feedback"/>
        <Box sx={{padding:{sm:"1rem", md:"1.5", xs:".5rem"}}}>
          <FormGroup onSubmit={handleSubmit}>
            <TextField sx={{margin:"1.2rem", display:"block", background:"initial"}} variant="outlined" type="text" label="Enter Your User Name"/>           
            <TextField sx={{margin:"1.2rem",display:"block", background:"initial"}} variant="outlined" type="email"  label="Enter Your Email"/>
            <TextField sx={{margin:"1.2rem",display:"block", background:"initial"}} multiline minRows={4} variant="outlined" type="text" label="Enter Your Email"/>
            <Button type="submit" sx={{
              background: "#103783",
              color: "white",
              marginLeft:"1.2rem",
              textTransform: "capitalize",
              border: "1px solid #2dbe6c",
              margin: "20px 0px 10px 0px",
              fontWeight: "600",
              padding: "15px 0",
              width: "80%",
              ":hover": {
                background: "#7c65a9",
                border: "1px solid #2dbe6c"
              },
            }} variant="contained" endIcon={<SendIcon />}>Send</Button>
          </FormGroup>
        </Box>
      </Box>
    </div>
  );
}
