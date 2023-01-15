import { Typography, Box, Button, Card, CardMedia, CardContent } from "@mui/material";
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
import feedback from "../public/newsLetter.png";
import contact from "../public/contactMe.png";
import skillHome from "../public/skillHome.png";
import Marquee from "react-fast-marquee";
import data from "../constants/skill.json";

export default function Home() {
  const [state, handleSubmit] = useForm("mgedqyov");
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
        container
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "300px",
              margin: "auto",
              paddingBottom: "1.5rem",
            }}
          >
            <GitHubIcon className={styles.icon} />
            <LinkedInIcon className={styles.icon} />
            <BsMedium className={styles.icon} />
            <TwitterIcon className={styles.icon} />
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
      {/* Skill Section */}
      <div
        style={{
          height: "6px",
          background: "linear-gradient(90deg,#247a4d 0%, #0c0c0c 100%)",
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
        <Typography sx={{ fontSize: { sm: "2rem", md: "2.8rem", xs: "1.3" } }}>
          / Skills
        </Typography>
        <Image src={skillHome} height={50} alt="Hero Picture" />
      </Box>
      <Marquee gradient={false} speed={80} pauseOnHover={true} pauseOnClick={true} delay={0} play={true} direction="left">
        {
          data.map((skill)=>(
            <Card key={skill.id} sx={{ maxWidth: 345, background:"linear-gradient(90deg,#727a9a 0%, #0a1647 100%)", textAlign:"center", margin:"10px", boxShadow: "8px 8px 8px #211f2f", color:"#fff" }}>
            <CardMedia
              sx={{ height: 170, width: 200, margin: "auto" }}
              image={skill.image}
              title={skill.skill}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">{skill.skill}</Typography>
            </CardContent>
            </Card>
          ))
        }
      </Marquee>
      {/* Get Touch With me */}
      <div
        style={{
          height: "6px",
          background: "linear-gradient(90deg, #e4e7e4 0%, #0a1647 100%)",
          margin: "1rem",
          marginTop: "2rem",
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
        <Typography sx={{ fontSize: { sm: "2rem", md: "2.8rem", xs: "1.3" } }}>
         / Get In Touch
        </Typography>
        <Image src={contact} height={50} alt="Hero Picture" />
      </Box>
      <Box sx={{ display: { sm: "flex" }, justifyContent: "space-evenly" , margin: "auto", paddingBottom:"2rem" }}>
        <Image width={350} src={feedback} alt="feedback" />
        <Box
          sx={{
            padding: { sm: "1rem", md: "1.5", xs: ".5rem" },
            width: "6rem",
            boxShadow: "6px 6px 10px #c5c5c5",
            borderRadius: "0 10px 10px 0",
          }}
        >
          <form onSubmit={handleSubmit}>
            <Box sx={{ marginBottom: "12px" }}>
              <input
                margin={"auto"}
                type="text"
                name="text"
                className={styles.input}
                placeholder="Enter Your User Name"
              />
            </Box>
            <Box sx={{ marginBottom: "12px" }}>
              <input
                type="email"
                margin={"auto"}
                name="email"
                className={styles.input}
                placeholder="Enter Your Email"
              />
            </Box>
            <Box sx={{ marginBottom: "12px" }}>
              <textarea
                width={"100%"}
                name="comment"
                rows="10"
                margin={"auto"}
                className={styles.input}
                placeholder="Type Your Message"
              />
            </Box>
            <div style={{ margin: "auto" }}>
              <button type="submit" className={styles.button}>
                <div className={styles.svgWrapper}>
                  <div className="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>Send</span>
              </button>
            </div>
          </form>
          {state.succeeded && <p>Thanks for your message!</p>}
        </Box>
      </Box>
    </div>
  );
}
