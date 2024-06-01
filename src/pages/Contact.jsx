import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Contact = () => (
  <Container>
    <Typography variant="h4" component="h2" gutterBottom>
      Contact Me
    </Typography>
    <form noValidate autoComplete="off">
      <TextField label="Name" fullWidth margin="normal" />
      <TextField label="Email" fullWidth margin="normal" />
      <TextField label="Message" fullWidth margin="normal" multiline rows={4} />
      <Button variant="contained" color="primary" type="submit">
        Send
      </Button>
    </form>
  </Container>
);

export default Contact;
