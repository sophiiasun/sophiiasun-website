import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { makeStyles } from '@mui/styles'

export const navStyles = makeStyles((theme) => ({
  navBarTransparent: { transition:'0.5s ease', backgroundColor:'rgba(255, 229, 236, 1)' },
  navBarSolid: { transition:'0.5s ease', backgroundColor:'rgba(255, 229, 236, 0.7)' }
}))

export const Nav = styled.nav`
  height:8vh; width:100%;
  display: flex;
  justify-content: center; 
  align-items: center; 
  font-size: 2rem; 
  position: fixed;
  opacity: 100%;
  top:0;
  z-index:1000;
  border-bottom: 0.15vw solid var(--col2);
`;

export const NavLink = styled(Link)`
  color: var(--col0); 
  text-decoration: none; 
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 2vh; 
  padding:0.5vw 0.7vw;
  cursor: pointer;
  border: 0.12vw solid var(--col0); border-radius: 1.5vmin;  
  height: auto;
  width: auto; 
  margin: auto; 
  background-size: 100vw 100vw; 
  transition: 0.5s; 
  justify-content: center;  
  text-transform:uppercase;
  &:hover { background-position:50vw 0; color:var(--col1); background:var(--col0) }
`;

export const Name = styled(Link)`    
  color:var(--col0); 
  justify-self: start;
  text-decoration: none; 
  font-size: 3vw; 
  margin-left: 0; 
  text-transform: uppercase; 
  -webkit-text-stroke: 0.2vw black;
  cursor: pointer;
`;

export const NavMenu = styled.div`
  display: grid; 
  grid-template-columns: repeat(5, auto); 
  grid-gap: 10px; 
  list-style: none; 
  text-align: center; 
  font-weight: bold; 
  width: 70vw; 
  height: 80%; 
  justify-content: end;
`;

