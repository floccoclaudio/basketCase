import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
  name: 'basket',
  initialState: [],
  reducers: {
    addToBasket: (state, action) => {
      console.log(action);
      //state.push(action.payload);
    },
  },
});

export const { addToBasket } = basketSlice.actions;

export default basketSlice.reducer;
