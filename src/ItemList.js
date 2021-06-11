import React from 'react';
import styled from 'styled-components';
import ItemCard from './components/ItemCard';
//#region - Styled components
const StyledContainer = styled('div')`
  margin: 0 auto;
  width: 50%;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
`;

//#endregion

const ItemList = ({ items }) => {
  return (
    <StyledContainer>
      {items.map((item) => {
        return <ItemCard item={item} />;
      })}
    </StyledContainer>
  );
};

export default ItemList;
