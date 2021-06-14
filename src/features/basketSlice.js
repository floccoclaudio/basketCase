import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
  name: 'basket',
  initialState: [],
  reducers: {
    addToBasket: (state, action) => {
      const isAlreadyIn = state.find((item) => item.id === action.payload.id);
      if (isAlreadyIn === undefined) {
        const { id } = action.payload;
        state.push({
          id,
          count: 1,
        });
      } else {
        isAlreadyIn.count++;
      }
    },
  },
});

export const { addToBasket } = basketSlice.actions;
export default basketSlice.reducer;
