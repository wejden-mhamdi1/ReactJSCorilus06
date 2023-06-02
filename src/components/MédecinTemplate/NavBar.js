import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const logout = () => {
    localStorage.clear(); 
    window.location.href = '/';
  };
  
  function onClickLogout(setting) {
    if (setting === 'logout') {
      logout();
    }
  }
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    
  return (
    
    <nav class="navbar navbar-expand-lg navbar-white bg-white " >
             
            
    <div class="container">

        <a href="" class="navbar-brand"><img src="../source/images/Capture.png" alt="corilus logo"/></a>

        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#easylo" type="button">
            <span class="bi bi-list"></span>
        </button>

        <div class="collapse navbar-collapse" id="easylo">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"> <a class="nav-link text-dark" href="/home">Home</a> </li>
                <li class="nav-item"> <a class="nav-link text-dark" href="/listConsultation">Consultation</a> </li>
                <li class="nav-item"> <a class="nav-link text-dark" href="/listFacture">Factures</a></li>
                <li class="nav-item"> <a class="nav-link text-dark" href="/calendar">Rendez vous</a></li>
                <li class="nav-item"> <a class="nav-link text-dark" href="/upload">EFACT</a></li>
                <label for="b"></label>

                <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            onClickLogout('logout');
            handleClose();
          }}
        >
          Logout
        </MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
      </Menu>
              </div>

            

                {/* <li className="nav-item">
                <div>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={onClickLogout}>Logout</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                  </Menu>
                </div>
              </li>*/}
              
                <li class="nav-item"> <a class="nav-link btn border-0 btn-primary" href="">Contact</a></li>
            </ul>
            
        </div>
    </div>

</nav>
  );
}

export default NavBar