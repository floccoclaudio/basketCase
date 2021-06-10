import { combineReducers } from '@reduxjs/toolkit';

import itemSliceReducer from '../features/itemSlice';

const rootReducers = combineReducers({
  itemSliceReducer,
});

export default rootReducers;
