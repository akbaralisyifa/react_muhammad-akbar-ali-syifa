// import { Route, Routes } from 'react-router-dom';
// import CreateProduct from './pages/CreateProduct';
// import Home from './pages/Home';
// import Navbar from './components/Navbar';

// import NotFound from './components/NotFound';
// import Login from './pages/Login';
// import { useState } from 'react';
// import PrivateRoute from './Route/PrivateRout';

// function App() {
//   const [auth, setAuth] = useState(false);
//   return (
//     <>
//       <Routes>
//         <Route path="/login" element={<Login setAuth={setAuth} />} />
//         <Route path="/home" element={<PrivateRoute auth={auth} component={Home} />} />
//         <Route path="/products" element={<PrivateRoute auth={auth} component={CreateProduct} />} />
//         <Route path="/products/:id" element={<PrivateRoute auth={auth} component={FormProduct} />} />
//         <Route path="/products/create" element={<FormProduct />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

import { Route, Routes } from 'react-router-dom';
import CreateProduct from './pages/CreateProduct';
import Home from './pages/Home';
import NotFound from './components/NotFound';
import Login from './pages/Login';
import { useState } from 'react';
import PrivateRoute from './Route/PrivateRout';
import FormProduct from './components/FormProduct';
import OpenAi from './pages/OpenAi';

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/home" element={<PrivateRoute component={Home} />} />
        <Route path="/products" element={<PrivateRoute component={CreateProduct} />} />
        <Route path="/openai" element={<PrivateRoute component={OpenAi} />} />
        <Route path="/products/create" element={<PrivateRoute component={FormProduct} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
