import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { productSlice } from './ProductSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

// membuat combine reducer nya
const reducers = combineReducers({
  product: productSlice,
});

// membuat configurasi storage nya
const persistConfig = {
  key: 'product',
  storage,
};

// menggabungkan persis dengan reducer nya isinya (config, reducer)
const persistedReducers = persistReducer(persistConfig, reducers);

// Mengkonfigurasi store nya
const store = configureStore({
  reducer: persistedReducers,
  middleware: [thunk],
});

// membuat persistor
const persistor = persistStore(store);

export { store, persistor };
