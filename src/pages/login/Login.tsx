import React from 'react'
import { Button, Grid, Typography, TextField } from '@material-ui/core'
import { Box } from '@mui/material'

import './Login.css';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid alignItems="center" xs={6}>
        <Box paddingX={20}>
          <form>
            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ fontWeight: 'bold' }}>
              Entrar
            </Typography>
            <TextField
              className='input_form'
              // value={userLogin.usuar}
              // onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
              id="usuario"
              label="usuário"
              variant="outlined"
              name="usuario"
              // margin="normal"
              fullWidth />
            <TextField
              className='input_form'
              // value={userLogin.senha}
              // onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
              id="senha"
              label="senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth />
            <Box marginTop={2} textAlign="center">
              
                <Button className='btn_logar' type="submit" variant="contained">
                  Logar
                </Button>
              
            </Box>
          </form>
          <Box display="flex" justifyContent="center" marginTop={2}>
            <Box marginRight={1}>
              <Typography variant="subtitle1" gutterBottom align="center">
                Não tem uma conta?
              </Typography>
            </Box>
            <Link to='/cadastrar'>
              <Typography className='login_link' variant="subtitle1" gutterBottom align="center" style={{ fontWeight: 'bold' }}>
                Cadastre-se
              </Typography>
            </Link>
          </Box>
        </Box>
      </Grid>
      <Grid
        xs={6}
        style={{
          backgroundImage: `url(https://i.imgur.com/d5bMdDJ.jpg)`,
          backgroundRepeat: 'no-repeat',
          width: '100vh',
          minHeight: '100vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></Grid>
    </Grid>
  );
}
