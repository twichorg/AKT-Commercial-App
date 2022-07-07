import React from "react";
import Home from "./pages/Home";
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



const App = () => {
  return(
  <BrowserRouter>               
  <Routes>
   <Route exact path="/" element={<Home/>} />
   <Route path="/products/" element={<ProductList/>} />
   <Route path="/product/" element={<Product/>} />
   <Route path="/cart" element={<Cart/>} />
   <Route path="/register" element={<Register/>} />
   <Route path="/login" element={<Login/>} />
  </Routes>
  </BrowserRouter>
  );
};

export default App;