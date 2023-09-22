import { createSlice } from '@reduxjs/toolkit';

import { v4 as uuidv4 } from 'uuid';

export const initialValue = [
  {
    id: uuidv4(),
    nama: 'Eiger',
    kategori: 'T-Shirt',
    image: null,
    freshness: 'New Brand',
    deskripsi: 'suisusius',
    price: 3,
  },
  {
    id: uuidv4(),
    nama: 'Rei',
    kategori: 'Jacket',
    image: null,
    freshness: 'New Brand',
    deskripsi: 'suisusius',
    price: 3,
  },
  {
    id: uuidv4(),
    nama: 'Erigo',
    kategori: 'Jacket',
    image: null,
    freshness: 'New Brand',
    deskripsi: 'suisusius',
    price: 3,
  },
];

// Deklarasi Reducer
export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: initialValue,
  },
  // Reducers (berisikan aksi)
  reducers: {
    hapusProduk: (state, action) => {
      state.products = state.products.filter((produk) => {
        return produk.id !== action.payload;
      });
    },
    tambahProduk: (state, action) => {
      const produkBaru = { id: uuidv4(), ...action.payload };
      state.products = [...state.reducers, produkBaru];
    },
  },
});

export const { hapusProduk, tambahProduk } = productSlice.actions;
export default productSlice.reducer;
