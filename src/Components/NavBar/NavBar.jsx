import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AuthDetails from '../AuthDetails/AuthDetails';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1, }}>
      <AppBar sx={{
          // color: 'black', 
          // backgroundColor: 'white',
          // boxShadow: 'none',
          borderRadius: '0.5rem',
          mt: '1rem',
          mb: '1rem'
          
        }} 
        position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Meal M8
          </Typography>
          <AuthDetails/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
