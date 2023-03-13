import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { TokenState } from '../../../store/tokens/TokensReducer';

import { Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { GitHub } from '@material-ui/icons';

import './Footer.css';

export default function Footer() {
  const token = useSelector<TokenState, TokenState['token']>(
    (state)=> state.token
  );

  var footerComponent;

  if (token !== '') {
    footerComponent = <Box 
      className="box"
    >
      <Box className="top_box">
        <Typography className="p_box">
          Visite nossas redes sociais:
        </Typography>
      </Box>
      <Box className="top_box">
        <a className='link' href='https://github.com/wagnermor' target='_blank' rel="noreferrer">
          <Typography className="p_box">
            < GitHub></GitHub>
          </Typography>
        </a>
        <a className='link' href='https://linkedin.com/in/wagnermor' target='_blank' rel="noreferrer">
        <Typography className="p_box linkedin">
          <LinkedInIcon className='linkedin'></LinkedInIcon>
        </Typography>
        </a>
      </Box>
      <Box className="botton_box">
        <Typography className="p_box">
          © 2022 Copyright &nbsp;
          <a href="https://brasil.generation.org" className="link">
            <span>
              Generation Brasil
            </span>
          </a>
        </Typography>
        <a className='link' href='https://github.com/wagnermor' target='_blank' rel="noreferrer">
          <Typography className="p_box">
            By Wagner Moreira
          </Typography>
        </a>

      </Box>
    </Box>
  }
  return (
    <>
      { footerComponent }
    </>
  );
}
