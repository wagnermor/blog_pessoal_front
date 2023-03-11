import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

import './Navbar.css';

export default function Navbar() {
  return (
    <AppBar className='appBar' position='static'>
      <Toolbar className='toolBar' variant='dense'>
        {/* <div>blabla</div> */}
        <Box className='logoBox'>
          <Link className='logoLink links' to='/home'>
            <Typography className='p_logo'>
              Blog
            </Typography>
            <Typography className='p_logo'>
              Wagneriano
            </Typography>
            </Link>
        </Box>

        <Box className='menuBox'>
          <Box className="menuOne">
            <Link className="menuLinks links" to='/home'>
              <Box className="menuItem">
                <Typography className="p_menu">
                  Início
                </Typography>
              </Box>
            </Link>
            <Link className="menuLinks links" to='/posts'>
              <Box className="menuItem">
                <Typography className="p_menu">
                  Postagens
                </Typography>
              </Box>
            </Link>
            <Link className="menuLinks links" to='/temas'>
              <Box className="menuItem">
                <Typography className="p_menu">
                  Temas
                </Typography>
              </Box>
            </Link>
            <Link className="menuLinks links" to='/home'>
              <Box className="menuItem">
                <Typography className="p_menu">
                  Cadastrar tema
                </Typography>
              </Box>
            </Link>
          </Box>
          <Link className="menuLinks links" to='/login'>
            <Box className="menuItem">
              <Typography className="p_menu">
                Sair
              </Typography>
            </Box>
          </Link>
            
          {/* </Box> */}
        </Box>
      </Toolbar>
    </AppBar>
  )
}
    /*<AppBar className='nav' position="static">
      <Toolbar>
      <div className='tollbar'>
      <Box className='logoBox'>
      <p className='logo'>
      <Link className='logo' to='/home'> Blog Wagneriano </Link>
      </p>
      </Box>
      {/*
      <Box className='menuBoxAll'>
      <Box className='menuBox'>
      <Box mx={1} className='linkBox'>
      <p className='link'>
      <Link className='link' to='/home'> Home </Link>
      </p>
      </Box>
      
      <Box mx={1} className='linkBox'>
      <p className='link'>
      <Link className='link' to='/home'> Postagens </Link>
      </p>
      </Box>
      <Box mx={1} className='linkBox'>
      <p className='link'>
                <Link className='link' to='/'> Temas </Link>
              </p>
            </Box>
            <Box mx={1} className='linkBox'>
            <p className='link'>
            <Link className='link' to='/'> Cadastrar Tema </Link>
            </p>
            </Box>
            </Box>
            </Box>
            <Box mx={1} className='linkBox'>
            <p className='link'>
            <Link className='link' to='/'> Sair </Link>
            </p>
            </Box>
            </div>
            </Toolbar>
            </AppBar>
          */
