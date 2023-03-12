import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';

import './Navbar.css';

export default function Navbar() {
  const [token, setToken] = useLocalStorage('token');
  let navigate = useNavigate();

  function goLogout() {
    setToken('')
    alert("Usuário deslogado")
    navigate('login')
  }

  return (
    <AppBar className='appBar' position='static'>
      <Toolbar className='toolBar' variant='dense'>
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
          <Box className="menuItem" onClick={ goLogout }>
            <Typography className="p_menu menuLinks links">
              Sair
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
