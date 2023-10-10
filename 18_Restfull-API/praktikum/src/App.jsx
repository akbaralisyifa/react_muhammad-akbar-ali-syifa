import { Route, Routes } from 'react-router-dom';
import CreateProduct from './pages/CreateProduct';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import FormProduct from './components/FormProduct';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<CreateProduct />} />
        <Route path="/products/:id" element={<FormProduct />} />
        <Route path="/products/create" element={<FormProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
