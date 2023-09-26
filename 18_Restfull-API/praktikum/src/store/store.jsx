import { combineReducers, configureStore } from '@reduxjs/toolkit';
import produkSlice from './produkSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

// mengkombinasikan reducer menggunakan combinereducers dari file produkSlice
const reducer = combineReducers({
  produk: produkSlice,
});

// membuat configurasi store
const persistConfig = {
  key: 'produk',
  storage,
};

// menggabungkan persist reducer
const persistedReducers = persistReducer(persistConfig, reducer);

// membuat store
const store = configureStore({
  reducer: persistedReducers,
});

const persistor = persistStore(store);

export { store, persistor };
