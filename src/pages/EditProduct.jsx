import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiService from "../services/api";
import { useProducts } from "../context/ProductContext";
import Loader from "../components/Loader";
import toast from "react-hot-toast";
import './EditProduct.css'

export default function EditProduct() {
  const { id } = useParams();
  const nav = useNavigate();
  const { updateProduct } = useProducts();
  const [form, setForm] = useState(null);

  useEffect(() => {
    const localData = localStorage.getItem("products");
    if (localData) {
      const products = JSON.parse(localData);
      const data = products.find((p) => p.id === Number(id));
      if (data) {
        setForm(data);
        return;
      }
    }
    apiService.getProduct(id).then((data) => setForm(data));
  }, [id]);

  if (!form) return <Loader />;

  const validateForm = () => {
    if (!form.title.trim()) 
      return "Title is required.";
    if (form.title.trim().length < 5) 
      return "Title must be at least 5 characters.";

    if (!form.price) 
      return "Price is required.";
    if (Number(form.price) < 10) 
      return "Price must be greater than or equal to 10.";

    if (!form.image.trim())
      return "Image URL is required.";

    if (!form.category.trim())
      return "Category is required.";

    if (!form.description.trim())
      return "Description is required.";
    if (form.description.trim().length < 10)
      return "Description must be at least 10 characters.";
    
    return null;
  };

  return (
    <form
      className="max-w-xl mx-auto space-y-4 mt-8"
      onSubmit={async (e) => {
        e.preventDefault();

        const error = validateForm();
        if (error) {
          toast.error(error);
          return;
        }

        await updateProduct(id, { ...form, price: Number(form.price) });
        toast.success("Product updated!");
        nav(`/product/${id}`);
      }}
    >
      {/* Title */}
      <label className="font-semibold">Product Title</label>
      <input
        className="input input-bordered w-full"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        placeholder="Enter product title"
      />

      {/* Price */}
      <label className="font-semibold">Price</label>
      <input
        className="input input-bordered w-full"
        type="number"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
        placeholder="Enter price"
      />

      {/* Image */}
      <label className="font-semibold">Image URL</label>
      <input
        className="input input-bordered w-full"
        value={form.image}
        onChange={(e) => setForm({ ...form, image: e.target.value })}
        placeholder="Enter product image URL"
      />

      {/* Category */}
      <label className="font-semibold">Category</label>
      <input
        className="input input-bordered w-full"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        placeholder="Enter category"
      />

      {/* Description */}
      <label className="font-semibold">Description</label>
      <textarea
        className="textarea textarea-bordered w-full"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        placeholder="Enter product description"
      />

      <button className="btn btn-success w-full mt-4">Update Product</button>
    </form>
  );
}
