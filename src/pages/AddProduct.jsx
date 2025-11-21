import { useState } from "react";
import { useProducts } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./AddProduct.css";

export default function AddProduct() {
  const { addProduct } = useProducts();
  const nav = useNavigate();

  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if(Object.values(form).some(f => f.trim() === "")){
      toast.error("All fields are required!");
      return;
    }
    if(form.title.length < 5){
      toast.error("Title must be at least 5 characters");
      return;
    }
    if(Number(form.price) < 10){
      toast.error("Price must be greater than 10");
      return;
    }

    await addProduct({ ...form, price: Number(form.price) });
    toast.success("Product added successfully!");
    nav("/");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2 className="form-title">Add New Product</h2>

      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="Product Title"
        />
      </div>

      <div className="form-group">
        <label htmlFor="price">Price ($)</label>
        <input
          id="price"
          type="number"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          placeholder="Product Price"
        />
      </div>

      <div className="form-group">
        <label htmlFor="image">Image URL</label>
        <input
          id="image"
          type="text"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          placeholder="Image URL"
        />
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <input
          id="category"
          type="text"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          placeholder="Category"
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          placeholder="Product Description"
          rows="4"
        />
      </div>

      <button type="submit" className="form-btn">
        Add Product
      </button>
    </form>
  );
}
