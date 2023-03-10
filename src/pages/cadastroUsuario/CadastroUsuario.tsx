import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid,Typography, Button, TextField } from '@material-ui/core';
import {Box} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import useLocalStorage from 'react-use-localstorage';
import Userlogin from '../../models/UserLogin';
import './CadastroUsuario.css';

export default function CadastroUsuario() {
  let navigate = useNavigate();
  const [confirmarSenha, setConfirmarSenha] = useState<String>("")
  const [user, setUser] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  
  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
    setConfirmarSenha(e.target.value)
  }
  
  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
    
  }
  
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    try{
      if(confirmarSenha === user.senha){
        cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
        alert('Usuario cadastrado com sucesso')
      }else{
        alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
      }
    } catch(error){
        alert('Falha no cadastro, verifique os campos')
    }
  }
  
  useEffect(() => {
    if (userResult.id !== 0){
      navigate('/login')
    }
    }, [userResult])
  
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
      <Grid item xs={6} className='img_cadastrar'></Grid>
      <Grid item xs={6} alignItems='center'>
        <Box paddingX={10}>
          <form onSubmit={onSubmit}>
            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='title'>Cadastrar</Typography>
            <TextField 
              value={user.nome}
              onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              className='input_form' 
              id='nome' 
              label='nome' 
              variant='outlined' 
              name='nome' 
              margin='normal' 
              fullWidth />
            <TextField 
              value={user.usuario}
              onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              className='input_form' 
              id='usuario' 
              label='usuario' 
              variant='outlined' 
              name='usuario' 
              margin='normal'
              fullWidth />
            <TextField 
              value={user.foto}
              onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              className='input_form' 
              id='foto' 
              label='foto' 
              variant='outlined' 
              name='foto' 
              margin='normal'
              fullWidth />
            <TextField 
              value={user.senha}
              onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              className='input_form' 
              id='senha' 
              label='senha' 
              variant='outlined' 
              name='senha' 
              margin='normal' 
              type='password' 
              fullWidth />
            <TextField 
              value={confirmarSenha}
              onChange={(e:ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
              className='input_form' 
              id='confirmarSenha' 
              label='confirmarSenha' 
              variant='outlined' 
              name='confirmarSenha' 
              margin='normal' 
              type='password' 
              fullWidth />
            <Box className='btn_box' marginTop={2} textAlign='center'>
              <Link to='/login'>
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
