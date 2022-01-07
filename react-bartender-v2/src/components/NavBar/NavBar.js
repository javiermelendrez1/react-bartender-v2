import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';
const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#282c34' }}>
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to='/' style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}><img src={logo} alt='react logo' width='30' height='30' /> React Bartender</Link>
          </Typography>

        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavBar;