import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CreateProduct from './pages/CreateProduct';
import NotFound from './pages/NotFound';
import Navbar from './pages/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailProduct from './pages/DetailProduct';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/createProduct" element={<CreateProduct />} />
            <Route path="/createProduct/:nama" element={<DetailProduct />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
