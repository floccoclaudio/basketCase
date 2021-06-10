import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { addToBasket } from './features/itemSlice';

//#region - Styled components
const StyledContainer = styled('div')`
  margin: 0 auto;
  width: 50%;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
`;

const StyledItemCard = styled('div')`
  width: 90%;
  border: 2px solid black;
  margin: 5px auto;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledItemProps = styled('div')`
  display: flex;
  flex-direction: column;
`;

const StyledBtnAdd = styled('button')`
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
  height: 50%;

  :hover {
    background: linear-gradient(to bottom, #408c99 5%, #599bb3 100%);
    background-color: #408c99;
  }
`;
//#endregion

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const onClickAdd = (item) => {
    dispatch(addToBasket(item));
  };

  return (
    <StyledContainer>
      {items.map((item) => {
        return (
          <StyledItemCard>
            <StyledItemProps>
              <p>Item: {item.label}</p>
              <p>Price: {item.price}</p>
              <p>Left in stock: {item.stock}</p>
            </StyledItemProps>
            <StyledBtnAdd onClick={() => onClickAdd(item)}>
              Add to basket
            </StyledBtnAdd>
          </StyledItemCard>
        );
      })}
    </StyledContainer>
  );
};

export default ItemList;
