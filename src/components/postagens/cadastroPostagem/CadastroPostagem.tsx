import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import {useNavigate, useParams } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';
import { useSelector } from 'react-redux';
import { busca, buscaId, post, put } from '../../../services/Service';
import Tema from '../../../models/Tema';
import Postagem from '../../../models/Postagem';
import { TokenState } from '../../../store/tokens/TokensReducer';
import './CadastroPostagens.css';
import { toast } from 'react-toastify';

export default function CadastroPostagens() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [temas, setTemas] = useState<Tema[]>([])
  
  const token = useSelector<TokenState, TokenState['token']>(
    (state)=>state.token
  );

  useEffect(() => {
    if (token === "") {
      toast.warn("Você precisa estar logado")
      navigate("/login")
    }
  }, [token])

  const [tema, setTema] = useState<Tema>(
    {
      id: 0,
      descricao: ''
    })
  const [postagem, setPostagem] = useState<Postagem>({
    id: 0,
    titulo: '',
    texto: '',
    data: '',
    tema: null
  })

  useEffect(() => { 
    setPostagem({
      ...postagem,
      tema: tema
    })
  }, [tema])

  useEffect(() => {
    getTemas()
    if (id !== undefined) {
      findByIdPostagem(id)
    }
  }, [id])

  async function getTemas() {
    await busca("/temas", setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }

  async function findByIdPostagem(id: string) {
    await buscaId(`/postagens/${id}`, setPostagem, {
      headers: {
        'Authorization': token
      }
    })
  }

  function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {
    setPostagem({
      ...postagem,
      [e.target.name]: e.target.value,
      tema: tema
    })
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    if (id !== undefined) {
      put(`/postagens`, postagem, setPostagem, {
        headers: {
          'Authorization': token
        }
      })
      toast.success('Postagem atualizada com sucesso');
    } else {
        post(`/postagens`, postagem, setPostagem, {
          headers: {
            'Authorization': token
          }
        })
        toast.success('Postagem cadastrada com sucesso');
    }
    back()

  }

  function back() {
    navigate('/postagens')
  }

  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro postagem</Typography>
        <TextField value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="titulo" label="titulo" variant="outlined" name="titulo" margin="normal" fullWidth />
        <TextField value={postagem.texto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="texto" label="texto" name="texto" variant="outlined" margin="normal" fullWidth />
        <FormControl >
          <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
          <Select labelId="demo-simple-select-helper-label" 
            id="demo-simple-select-helper"
            onChange={(e) => buscaId(`/temas/${e.target.value}`, setTema, {
              headers: {
                'Authorization': token
              }
            })}
          >
            { temas.map(tema => (
              <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
            ))}
          </Select>
          <FormHelperText>Escolha um tema para a postagem</FormHelperText>
          <Button type="submit" variant="contained" color="primary">
            Finalizar
          </Button>
        </FormControl>
      </form>
    </Container>
  )
}
