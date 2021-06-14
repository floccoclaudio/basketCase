import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import ItemCardBasket from './components/ItemCardBasket';
//#region - Styled components
const StyledContainer = styled('div')`
  margin: 0 auto;
  width: 50%;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
`;

//#endregion

const Basket = () => {
  const selectedItem = useSelector((state) => state.basket);

  return (
    <StyledContainer>
      {selectedItem.map((item) => {
        return <ItemCardBasket item={item} />;
      })}
    </StyledContainer>
  );
};

export default Basket;
