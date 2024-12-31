
import { configureStore } from '@reduxjs/toolkit';
import MyOrderSlice from '../myorderslice/MyOrderSlice';

const store = configureStore({
  reducer: {
    order: MyOrderSlice,
  },
});

export default store;
