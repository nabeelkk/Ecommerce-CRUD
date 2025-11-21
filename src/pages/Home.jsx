import { useProducts } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import Banner from "../components/Banner";
import "./Home.css";

export default function Home({ searchTerm }) {
  const { products, loading } = useProducts();

  if (loading) return <Loader />;

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="home-wrapper">
        <Banner />

        <section className="page-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.length > 0 ? (
            <div className="home-grid">
              {filteredProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <p className="no-results">No products found.</p>
          )}
        </section>
      </div>
    </>
  );
}
