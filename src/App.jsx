import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import Layout from "./pages/Layout"; 
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import '@bootstrap';
import Navbar from './components/Navbar';

function App() {
  return (
      <BrowserRouter>
      <Navbar />
        <Routes>
          
            <Route index element={<MainPage />} />           
            <Route path="Products" element={<Products />} />           
            <Route path="Orders" element={<Orders />} />                  
           
        </Routes>
      </BrowserRouter>
  );
}

export default App;