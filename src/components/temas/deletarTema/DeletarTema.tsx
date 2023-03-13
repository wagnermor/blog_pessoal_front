import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
} from "@material-ui/core";
import { Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { buscaId, deleteId } from "../../../services/Service";
import Tema from "../../../models/Tema";
import { TokenState } from "../../../store/tokens/TokensReducer";

import "./DeletarTema.css";
import { toast } from "react-toastify";

export default function DeletarTema() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState['token']>(
    (state)=>state.token
  );
  const [tema, setTema] = useState<Tema>();

  useEffect(() => {
    if (token === "") {
      toast.warn("Você precisa estar logado");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    buscaId(`/temas/${id}`, setTema, {
      headers: {
        Authorization: token,
      },
    });
  }

  function sim() {
    navigate("/temas");
    deleteId(`/temas/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    toast.success("Tema deletado com sucesso");
  }

  function nao() {
    navigate("/temas");
  }

  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Tema:
              </Typography>
              <Typography color="textSecondary">{tema?.descricao}</Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2}>
              <Box mx={2}>
                <Button
                  onClick={sim}
                  variant="contained"
                  className="marginLeft"
                  size="large"
                  color="primary"
                >
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button
                  onClick={nao}
                  variant="contained"
                  size="large"
                  color="secondary"
                >
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
