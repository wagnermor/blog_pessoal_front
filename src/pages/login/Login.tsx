import React, { ChangeEvent, useEffect, useState } from 'react'
import { Button, Grid, Typography, TextField } from '@material-ui/core'

// import useLocalStorage from 'react-use-localstorage';
import UserLogin from '../../models/UserLogin';
import { login } from '../../services/Service';
import { Box } from '@mui/material'
import { addToken } from '../../store/tokens/Action';

import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

export default function Login() {
  let navigate = useNavigate()
  const [token, setToken] = useState('');
  const dispatch = useDispatch()

  const [userLogin, setUserLogin] = useState<UserLogin>(
    {
      id: 0,
      nome: '',
      usuario:'',
      senha:'',
      foto:'',
      token:''
    }
  )

  function updateModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    try{
      await login(`/usuarios/logar`, userLogin, setToken)
      toast.success(`Usuário logado com sucesso!`)
    }catch(error){
      toast.error(`Dados do usuário inconsistentes. Erro ao logar!`)
    }
  }

  useEffect(() => {
    if(token !== '')
      navigate('/home')
  }, [token])
  
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid alignItems="center" xs={6}>
        <Box paddingX={20}>
          <form onSubmit={onSubmit}>
            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ fontWeight: 'bold' }}>
              Entrar
            </Typography>
            <TextField
              className='input_form'
              value={userLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
              id="usuario"
              label="usuário"
              variant="outlined"
              name="usuario"
              fullWidth />
            <TextField
              className='input_form'
              value={userLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
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
            <Link to='/cadastro-usuario'>
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
