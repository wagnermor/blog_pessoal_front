import React from 'react';
import { Grid,Typography, Button, TextField } from '@material-ui/core';
import {Box} from '@mui/material';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';

export default function CadastroUsuario() {
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
      <Grid item xs={6} className='img_cadastrar'></Grid>
      <Grid item xs={6} alignItems='center'>
        <Box paddingX={10}>
          <form>
            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='title'>Cadastrar</Typography>
            <TextField className='input_form' id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
            <TextField className='input_form' id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal'fullWidth />
            <TextField className='input_form' id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
            <TextField className='input_form' id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
            <Box className='btn_box' marginTop={2} textAlign='center'>
              <Link to='/login' className='text-decorator-none'>
                <Button variant='contained' color='secondary' className='btnCancelar'>
                  Cancelar
                </Button>
              </Link>
              <Button className='btn_cadastrar' type='submit' variant='contained'>
                Cadastrar
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}
