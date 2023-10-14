import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    products: productSlice,
  },
  middleware: [thunk],
});

export default store;
