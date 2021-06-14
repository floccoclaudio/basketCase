import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
// import { addToBasket } from '../features/basketSlice';
// import { useDispatch } from 'react-redux';
//#region - styled components -

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
  :disabled {
    text-decoration: line-through;
  }
`;
//#endregion

const ItemCardBasket = ({ item }) => {
  const inventory = useSelector((state) => state.inventory);
  const invItem = inventory.find((a) => a.id === item.id);
  return (
    <StyledItemCard>
      <StyledItemProps>
        <p>Item: {invItem.label}</p>
        <p>Price: {invItem.price}</p>
        <p>Count :{item.count}</p>
      </StyledItemProps>

      <StyledBtnAdd>Add to basket</StyledBtnAdd>
    </StyledItemCard>
  );
};

export default ItemCardBasket;
