import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React from 'react'

function Navbar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Box style={{ cursor:"pointer" }}>
            <Typography variant="h5" color="inherit">
              Blog Pessoal
            </Typography>
          </Box>
          
          <Box display="flex" justifyContent="start">
            <Box mx={1} style={{cursor:"pointer"}}>
              <Typography variant="h6" color="inherit">
                home
              </Typography>
            </Box>
          </Box>
          
          <Box display="flex" justifyContent="start">
            <Box mx={1} style={{cursor:"pointer"}}>
              <Typography variant="h6" color="inherit">
                postagens
              </Typography>
            </Box>
          </Box>
          <Box display="flex" justifyContent="start">
            <Box mx={1} style={{cursor:"pointer"}}>
              <Typography variant="h6" color="inherit">
                temas
              </Typography>
            </Box>
          </Box>
          <Box display="flex" justifyContent="start">
            <Box mx={1} style={{cursor:"pointer"}}>
              <Typography variant="h6" color="inherit">
                cadastrar tema
              </Typography>
            </Box>
          </Box>
          <Box display="flex" justifyContent="start">
            <Box mx={1} style={{cursor:"pointer"}}>
              <Typography variant="h6" color="inherit">
                logout
              </Typography>
            </Box>
          </Box>

        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar