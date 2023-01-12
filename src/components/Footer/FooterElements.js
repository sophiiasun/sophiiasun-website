import styled from 'styled-components';
import { makeStyles } from '@mui/styles'
import { NavLink as Link } from 'react-router-dom';

export const Foot = styled.footer`
  height:80px; width:100%;
  justify-content:center; 
  font-size:1rem; 
  bottom:0;
  border-top:0.15vw solid var(--col2);
  background-color:rgba(255, 229, 236, 1);
  align-items:center;
`;

export const FootMenu = styled.div`
  display:flex;
  list-style:none; 
  text-align:center; 
  font-weight:bold; 
  width:100%; 
  // height:auto;   
  justify-content:center;
`;