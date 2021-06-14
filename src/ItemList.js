import React from 'react';
import styled from 'styled-components';
import ItemCard from './components/ItemCardList';
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
        if (item.stock <= 0) {
          return <ItemCard item={item} outOfStock={true} />;
        }
        return <ItemCard item={item} outOfStock={false} />;
      })}
    </StyledContainer>
  );
};

export default ItemList;
