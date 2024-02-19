import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import Layout from "./pages/Layout"; 
import OrdersPage from "./pages/OrdersPage";
import ProductsPage from "./pages/ProductsPage";
import '@bootstrap';
import Navbar from './components/Navbar';

function App() {
  return (
      <BrowserRouter>
      <Navbar />
        <Routes>
          
            <Route index element={<MainPage />} />           
            <Route path="Products" element={<ProductsPage />} />           
            <Route path="Orders" element={<OrdersPage />} />                  
           
        </Routes>
      </BrowserRouter>
  );
}

export default App;