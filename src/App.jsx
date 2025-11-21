import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import ProductDetails from "./pages/ProductDetails";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import Footer from "./components/Footer";

export default function App() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <BrowserRouter>
      <ProductProvider>
        <Navbar onSearch={setSearchTerm}/>
        <Toaster position="top-right"/>
        <div className="p-5">
          <Routes>
            <Route path="/" element={<Home searchTerm={searchTerm}/>} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/edit/:id" element={<EditProduct />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </div>
        <Footer />
      </ProductProvider>
    </BrowserRouter>
  );
}
