import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import Layout from "./pages/Layout"; 
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import '@bootstrap';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>           
          <Route index element={<MainPage />} />           
          <Route path="Products" element={<Products />} />           
          <Route path="Orders" element={<Orders />} />                  
        </Route>   
      </Routes>
    </BrowserRouter>
  )
}

export default App;