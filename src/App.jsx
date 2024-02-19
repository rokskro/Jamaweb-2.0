import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage';
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
            <Route exact path="Products" element={<Products />} />           
            <Route exact path="Orders" element={<Orders />} />               
           
        </Routes>
      </BrowserRouter>
  );
}
//test
export default App;