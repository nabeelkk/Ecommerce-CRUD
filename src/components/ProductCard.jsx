import { Link } from "react-router-dom";
import "./ProductCard.css"; // import here or in a global CSS

export default function ProductCard({ product }) {
  return (
    <article className="product-card" aria-labelledby={`title-${product.id}`}>
      <figure className="product-figure" aria-hidden="true">
        <img
          src={product.image}
          alt={product.title || "product image"}
          className="product-img"
          loading="lazy"
        />
      </figure>

      <div className="product-body">
        <h2 id={`title-${product.id}`} className="product-title">
          {product.title}
        </h2>

        <p className="product-price">${Number(product.price).toFixed(2)}</p>

        <Link to={`/product/${product.id}`} className="product-btn" aria-label={`View ${product.title}`}>
          View Details
        </Link>
      </div>
    </article>
  );
}
