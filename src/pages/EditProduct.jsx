import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiService from "../services/api";
import { useProducts } from "../context/ProductContext";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

export default function EditProduct() {
  const { id } = useParams();
  const nav = useNavigate();
  const { updateProduct } = useProducts();

  const [form, setForm] = useState(null);

  useEffect(() => {
    const localData = localStorage.getItem('products')
    if(localData){
        const product = JSON.parse(localData)
        const data = product.find(p=>p.id === Number(id))
        if(data){
            setForm(data)
            return
        }
    }
    apiService.getProduct(id).then(data => setForm(data));
  }, [id]);

  if (!form) return <Loader />;

  return (
    <form
      className="max-w-xl mx-auto space-y-4 mt-8"
      onSubmit={async (e) => {
        e.preventDefault();
        await updateProduct(id, { ...form, price: Number(form.price) });
        toast.success("Product updated!");
        nav(`/product/${id}`);
      }}
    >
      <input
        className="input input-bordered w-full"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <input
        className="input input-bordered w-full"
        type="number"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />
      <input
        className="input input-bordered w-full"
        value={form.image}
        onChange={(e) => setForm({ ...form, image: e.target.value })}
      />
      <input
        className="input input-bordered w-full"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />
      <textarea
        className="textarea textarea-bordered w-full"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <button className="btn btn-success w-full">Update</button>
    </form>
  );
}
