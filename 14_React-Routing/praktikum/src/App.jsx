import { Routes, Route } from "react-router-dom"
import Navbar from "./pages/Navbar"
import LandingPage from "./pages/LandingPage"
import CreateProduct from "./pages/CreateProduct"
import NotFound from "./pages/NotFound"
import DetailProduct from "./pages/DetailProduct"


function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" exact element={<LandingPage />}  />
        <Route path="/createProduct" exact element={<CreateProduct/>} />
        <Route path="/createProduct/:nama" element={<DetailProduct/>}/>
        <Route path="*" element={NotFound} />
      </Routes>  
    </>
    
  )
}

export default App
