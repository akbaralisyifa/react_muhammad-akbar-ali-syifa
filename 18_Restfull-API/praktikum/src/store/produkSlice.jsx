import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialValue = [
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

// mendeklarasi Redux
export const ProdukSlice = createSlice({
  name: 'produk',
  initialState: {
    produks: initialValue,
  },

  reducers: {
    hapusProduk: (state, action) => {
      state.produks = state.produks.filter((produk) => {
        return produk.id !== action.payload;
      });
    },
    tambahProduk: (state, action) => {
      const newData = { id: uuidv4(), ...action.payload };
      state.produks = [...state.produks, newData];
    },
  },
});

export const { hapusProduk, tambahProduk } = ProdukSlice.actions;
export default ProdukSlice.reducer;
