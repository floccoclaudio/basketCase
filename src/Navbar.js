import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  box-shadow: 0px 10px 14px -7px #276873;
  background: linear-gradient(to bottom, #599bb3 5%, #408c99 100%);
  background-color: #599bb3;
  border-radius: 8px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 20px;
  font-weight: bold;
  padding: 13px 32px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #3d768a;
  :hover {
    background: linear-gradient(to bottom, #408c99 5%, #599bb3 100%);
    background-color: #408c99;
  }
`;

const StyledNavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: rgba(220, 220, 220, 0.2);
  padding: 15px;
`;

const Navbar = () => {
  return (
    <StyledNavBar>
      <StyledLink to="/">Item List</StyledLink>
      <StyledLink to="/basket">Basket</StyledLink>
    </StyledNavBar>
  );
};

export default Navbar;
