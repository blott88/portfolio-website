// src/pages/Home.jsx
import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Home = () => (
  <Container>
    <Typography variant="h3" component="h1" gutterBottom>
      Welcome to My Profile
    </Typography>
    <Typography variant="h6" component="p">
      I am [Your Name], a [Your Profession]. Here you will find information about my skills, projects, and how to contact me.
    </Typography>
  </Container>
);

export default Home;
