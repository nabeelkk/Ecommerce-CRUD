import { useEffect, useState } from "react";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import apiService from "../services/api";
import { useProducts } from "../context/ProductContext";
import Loader from "../components/Loader";
import toast from "react-hot-toast";
import "./ProductDetails.css"; // import the CSS

export default function ProductDetails() {
  const { id } = useParams();
  const nav = useNavigate();
  const location = useLocation();
  const { deleteProduct } = useProducts();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const localData = localStorage.getItem("products");
    if (localData) {
      const product = JSON.parse(localData);
      const data = product.find((p) => p.id === Number(id));
      if (data) {
        setProduct(data);
        setLoading(false);
        return;
      }
    }
    apiService.getProduct(id).then((data) => {
      setProduct(data);
      setLoading(false);
    });
  }, [id, location.key]);

  if (loading) return <Loader />;

  return (
    <div className="product-details-container">
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p className="text-xl font-semibold">${product.price}</p>

      <div className="mt-6 flex gap-4">
        <Link to={`/edit/${product.id}`} className="btn btn-warning">
          Edit
        </Link>
        <button
          className="btn btn-error"
          onClick={async () => {
            await deleteProduct(product.id);
            toast.success("Product deleted!");
            nav("/");
          }}
        >
          Delete
        </button>
      </div>

      <p className="description mt-6">{product.description}</p>
    </div>
  );
}
