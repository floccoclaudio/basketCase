import { combineReducers } from '@reduxjs/toolkit';

import itemSliceReducer from '../features/itemSlice';
import basketSlice from '../features/basketSlice';

const rootReducers = combineReducers({
  //assign inv e basket as 2 named variables that takes that portion of the state as value
  inventory: itemSliceReducer,
  basket: basketSlice,
});

export default rootReducers;
