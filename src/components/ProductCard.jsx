import { Link } from "react-router-dom";
export default function ProductCard({ product }) {
  return (
    <>
    <div className="card bg-base-100 shadow-lg p-4">
      <figure className="h-48 flex justify-center">
        <img src={product.image} className="object-contain max-h-full" />
      </figure>

      <div className="card-body">
        <h2 className="text-sm font-bold">{product.title}</h2>
        <p className="text-lg font-semibold">${product.price}</p>

        <Link to={`/product/${product.id}`} className="btn btn-primary btn-sm mt-2">
          View Details
        </Link>
      </div>
    </div>
    </>
  );
}
