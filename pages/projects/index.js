import React from "react";
import data from "../../constants/projects";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { Box } from "@mui/system";

const buttonStyle = {
  color: "#809b0e",
  margin: { xs: "0 1.5px", sm: "0 3px", md: "0 6px" },
  textTransform: "none",
  border: "1px solid #e5e7ec",
  padding: "8px 0px",
  fontWeight: "bold",
  fontSize: ".8rem",
  width: { xs: "40px", sm: "70px", md: "90px" },
  boxShadow: "inset 0 0 0 0 #7c65a9",
  transition: "ease-out 0.5s",
  "&:hover": {
    color: "white",
    boxShadow: {
      xs: "inset 40px 0 0 0 #43470b",
      sm: "inset 70px 0 0 0 #43470b",
      md: "inset 90px 0 0 0 #43470b",
    },
    border: "1px solid #215600",
  },
};

export default function Projects() {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #074170 0%, #7e9012 100%)",
        padding: "1rem",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Typography variant="h3">My Project</Typography>
      <Grid container spacing={2}>
        {data.map((project) => (
          <Grid
            key={project.id}
            item
            xs={12}
            sm={6}
            md={4}
            sx={{ margin: "auto" }}
          >
            <Card sx={{background:"linear-gradient(to right, #0f2027, #203a43, #2c5364)"}}>
              <CardMedia
                sx={{ height: 400, width: "100%", margin: "auto" }}
                image={project.image}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" color={"#fff"}>
                  {project.title}
                </Typography>
                <Typography variant="body2" color={"#fff"}>
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ margin: "auto" }}>
                <Box sx={{margin:"auto"}}>
                <Link href={project.liveSite} target="_blank">
                  <Button sx={buttonStyle}>liveSite</Button>
                </Link>
                <Link href={project.githubClient} target="_blank">
                  <Button sx={buttonStyle}>Client Code</Button>
                </Link>
                <Link href={project.githubServer} target="_blank">
                  <Button sx={buttonStyle}>Server Code</Button>
                </Link>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
