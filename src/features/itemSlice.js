import { createSlice } from '@reduxjs/toolkit';
const inventory = [
  {
    label: 'mouse',
    price: 10,
    id: 'mouseID',
    stock: 15,
  },
  {
    label: 'keyboard',
    price: 15,
    id: 'keyboardID',
    stock: 1,
  },
  {
    label: 'headphones',
    price: 60,
    id: 'headphonesID',
    stock: 0,
  },
  {
    label: 'laptop',
    price: 250,
    id: 'laptopID',
    stock: 5,
  },
];

export const inventorySlice = createSlice({
  name: 'inventory',
  initialState: [...inventory],
  reducers: {
    removeFromInventory: (state, payload) => {},
  },
});

export default inventorySlice.reducer;
