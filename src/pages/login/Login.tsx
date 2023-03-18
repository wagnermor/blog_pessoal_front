import React, { ChangeEvent, useEffect, useState } from 'react'
import { Button, Grid, Typography, TextField } from '@material-ui/core'

import UsuarioLogin from '../../models/UserLogin';
import { login } from '../../services/Service';
import { Box } from '@mui/material'
import { addId,addToken } from '../../store/tokens/Action';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import './Login.css';

export default function Login() {
  let navigate = useNavigate()
  const [token, setToken] = useState('')
  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(false)

  const [userLogin, setUserLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    token: ''
  })

  const [respUserLogin, setRespUserLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    token: ''
  })

  function updateModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }

  
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    try{
      setIsLoading(true)
      await login(`/usuarios/logar`, userLogin, setRespUserLogin)
      toast.success('Usuário logado com sucesso', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    } catch(error) {
      setIsLoading(false)
      toast.warning('Usuário e/ou senha inválidos',{
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        })
    }
  }

  useEffect(() => {
    if(token !== ''){
      dispatch(addToken(token))
      navigate('/home')
    }
  }, [token])

  useEffect(() => {
    if(respUserLogin.token !== '') {
      dispatch(addToken(respUserLogin.token))
      dispatch(addId(respUserLogin.id.toString()))
      navigate('/home')
    }
  }, [respUserLogin.token])


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
                { isLoading ? 'Aguarde' : 'Logar' }
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
