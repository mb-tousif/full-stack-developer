import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import logo from "../public/my.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

export default function Home() {
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
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, hsla(248, 21%, 15%, 1) 0%, hsla(250, 14%, 61%, 1) 100%)",
      }}
    >
      <Box
        sx={{
          display: {
            sm: "flex",
            justifyContent: "space-around",
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
            background: "#8e6865",
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
    </div>
  );
}
