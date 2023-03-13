import React, {useState, useEffect, ChangeEvent} from 'react'
import { useSelector } from 'react-redux';
import {useNavigate, useParams } from 'react-router-dom'
import { Container, Typography, TextField, Button } from "@material-ui/core"
// import useLocalStorage from 'react-use-localstorage';
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/TokensReducer';
import './CadastroTema.css';
import { toast } from 'react-toastify';

export default function CadastroTema() {
  let navigate = useNavigate();
  const { id } = useParams<{id: string}>();
  const token = useSelector<TokenState, TokenState['token']>(
    (state)=>state.token
  );
  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: ''
  })

  useEffect(() => {
    if (token === "") {
      toast.warn("Você precisa estar logado")
      navigate("/login")
    }
  }, [token])

  useEffect(() =>{
    if(id !== undefined)
      findById(id)
  }, [id])

  async function findById(id: string) {
    buscaId(`/temas/${id}`, setTema, {
      headers: {
        'Authorization': token
      }
    })
  }

  function updatedTema(e: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [e.target.name]: e.target.value,
    })
  }
        
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log("tema " + JSON.stringify(tema))
    if (id !== undefined) {
      console.log(tema)
      put(`/temas`, tema, setTema, {
        headers: {
          'Authorization': token
        }
      })
      toast.success('Tema atualizado com sucesso');
    } else {
      post(`/temas`, tema, setTema, {
        headers: {
          'Authorization': token
        }
      })
      toast.success('Tema cadastrado com sucesso');
    }
    back()
  }
    
  function back() {
    navigate('/temas')
  }
  
  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography variant="h3" color="textSecondary" component="h1" align="center" >
          {tema.id !== 0 ? 'Edite o Tema' : 'Cadastre um tema'}
        </Typography>
        <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
        <Button type="submit" variant="contained" color="primary">
          Finalizar
        </Button>
      </form>
    </Container>
  )
}
