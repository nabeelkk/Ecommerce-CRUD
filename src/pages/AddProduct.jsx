import { useState } from "react";
import { useProducts } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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
    await addProduct({ ...form, price: Number(form.price) });
    toast.success("Product added successfully!");
    nav("/");
  };

  return (
    <form className="max-w-xl mx-auto space-y-4 mt-8" onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        className="input input-bordered w-full"
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <input
        placeholder="Price"
        type="number"
        className="input input-bordered w-full"
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />
      <input
        placeholder="Image URL"
        className="input input-bordered w-full"
        onChange={(e) => setForm({ ...form, image: e.target.value })}
      />
      <input
        placeholder="Category"
        className="input input-bordered w-full"
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />
      <textarea
        placeholder="Description"
        className="textarea textarea-bordered w-full"
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <button className="btn btn-primary w-full">Add Product</button>
    </form>
  );
}
