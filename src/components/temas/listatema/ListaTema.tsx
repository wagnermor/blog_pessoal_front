import React, { useState, useEffect } from "react";
import "./ListaTema.css";
import { busca } from "../../../services/Service";
import useLocalStorage from "react-use-localstorage";
import { useNavigate, Link } from "react-router-dom";
import { Box } from "@mui/material";
import { Typography, Button, Card, CardActions, CardContent } from "@material-ui/core";
import Tema from "../../../models/Tema";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";

export default function ListaTema() {
  const [temas, setTemas] = useState<Tema[]>([])
  const token = useSelector<TokenState, TokenState['token']>(
    (state)=>state.token
  );
  let navigate = useNavigate();
  
  useEffect(()=>{
    if(token === ''){
      alert("Você precisa estar logado")
      navigate("/login")
    }
  }, [token])
  
  async function getTema(){
    await busca("/temas", setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }
  
  useEffect(()=>{
    getTema()
  }, [temas.length])

  return (
    <>
      {temas.map((tema) => (
        <Box m={2}>
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Tema
              </Typography>
              <Typography variant="h5" component="h2">
                {tema.descricao}
              </Typography>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>
                <Link
                  to={`/formularioTema/${tema.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button
                      variant="contained"
                      className="marginLeft"
                      size="small"
                      color="primary"
                    >
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link
                  to={`/deletarTema/${tema.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button variant="contained" size="small" color="secondary">
                      deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
    ))
      }
    </>
  );
}
