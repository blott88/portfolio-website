// src/pages/Projects.jsx
import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ProjectCard from '../components/ProjectCard';

const Projects = () => (
  <Container>
    <Typography variant="h4" component="h2" gutterBottom>
      My Projects
    </Typography>
    <Grid container spacing={4}>
      {/* Add ProjectCard components here */}
      <Grid item xs={12} sm={6} md={4}>
        <ProjectCard title="Project 1" description="Description of project 1" />
      </Grid>
      {/* Repeat for other projects */}
    </Grid>
  </Container>
);

export default Projects;
