import React from "react";
import data from "../../constants/projects";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Link from "next/link";

export default function Projects() {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #074170 0%, #7e9012 100%)",
        padding: "1rem",
        color: "#fff",
      }}
    >
      <Typography variant="h3">My Project</Typography>
      <Grid container spacing={2}>
      {
        data.map(project=>
          <Grid  key={project.id} item xs={12} sm={6} md={4} sx={{margin:"auto"}}>
          <Card>
          <CardMedia
            sx={{ height: 400, width: "100%", margin: "auto" }}
            image={project.image}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {project.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Link href={project.liveSite}><Button>liveSite</Button></Link>
            <Link href={project.githubClient}><Button>Client Code</Button></Link>
            <Link href={project.githubServer}><Button>Server Code</Button></Link>
          </CardActions>
        </Card>
          </Grid>
          )
        }
        </Grid>
    </div>
  );
}
