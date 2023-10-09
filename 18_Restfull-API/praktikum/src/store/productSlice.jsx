import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
  },

  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    addProduct: (state, action) => {
      state.data.push(action.payload);
    },
    deleteProducts: (state, action) => {
      state.data = state.data.filter((product) => product.id !== action.payload);
    },
  },
});

export const { setData, addProduct, deleteProducts } = productSlice.actions;

export const fetchData = () => async (dispatch) => {
  const url = 'https://65127c2db8c6ce52b395afbb.mockapi.io/products';

  try {
    const response = await axios.get(url);
    const responseData = await response.data;
    dispatch(setData(responseData));
  } catch (error) {
    console.log(error);
  }
};

export const addProductAsync = (newProduct) => async (dispatch) => {
  const url = 'https://65127c2db8c6ce52b395afbb.mockapi.io/products';

  try {
    const response = await axios.post(url, newProduct);
    const responseData = await response.data;
    dispatch(addProduct(responseData));
  } catch (error) {
    console.log(error);
  }
};

export const deleteProductAsync = (id) => async (dispatch) => {
  try {
    const url = `https://65127c2db8c6ce52b395afbb.mockapi.io/products/${id}`;
    await axios.delete(url);
    dispatch(deleteProducts(id));
  } catch (error) {
    console.log(error);
  }
};

export default productSlice.reducer;
