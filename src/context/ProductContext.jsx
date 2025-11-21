import { createContext, useContext, useEffect, useState } from "react";
import apiService from "../services/api";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    const localData = localStorage.getItem("products");

    if (localData) {
      setProducts(JSON.parse(localData));
      setLoading(false);
      return;
    }
    const data = await apiService.getAllProducts();
    setProducts(data);
    localStorage.setItem("products", JSON.stringify(data))
    setLoading(false);
  };

  const addProduct = async (product) => {
    const newProduct = {...product,id:Date.now()}
    const updated = [newProduct, ...products]
    setProducts(updated)
    localStorage.setItem('products',JSON.stringify(updated))
  };

  const updateProduct = async (id, data) => {
    try {
      const updated = products.map(p =>
        p.id === Number(id) ? { ...p, ...data } : p
      );
      setProducts(updated)
      localStorage.setItem('products',JSON.stringify(updated))

    } catch (error) {
      console.log(error)
    }
  };

  const deleteProduct = async (id) => {
    const updated = products.filter(p=>p.id !== Number(id))
    setProducts(updated)
    localStorage.setItem('products',JSON.stringify(updated))
  };

  return (
    <ProductContext.Provider value={{ products, loading, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
