import { useEffect } from "react";
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import './Home.css';

export default function Home() {
  /*let navigate = useNavigate();
  const [token, setToken] = useLocalStorage('token');

  useEffect(() => {
    if(token === "") {
      alert("Você precisa estar logado");
      navigate("/login")
    }
  }, [token]);*/

  return (
    <Grid className='boxMain'
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      
      <Grid alignItems="center" item xs={6}>
        <Box paddingX={20}>
          <Typography className='title_home'
            variant="h4"
            gutterBottom
            color="textPrimary"
            component="h3"
            align="center"
          >
            Seja bem vindo(a)!
          </Typography>
          <Typography className='title_home'
            variant="h5"
            gutterBottom
            color="textPrimary"
            component="h5"
            align="center"
          >
            expresse aqui os seus pensamentos e opiniões!
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Box marginRight={1}></Box>
          <Link to='/postagens'>
            <Button className='btn_ver_postagem' variant="outlined"> Ver Postagens </Button>
          </Link>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <img
          src="https://i.imgur.com/H88yIo2.png"
          alt=""
          width="500px"
          height="500px"
        />
      </Grid>
      <Grid xs={12} style={{ backgroundColor: 'white' }}>
        <TabPostagem />
      </Grid>
    </Grid>
  );
}
