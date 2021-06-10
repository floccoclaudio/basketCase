import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled('div')`
  margin: 0 auto;
  width: 50%;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
`;

const Basket = () => {
  return <StyledContainer>Basket case here</StyledContainer>;
};

export default Basket;
