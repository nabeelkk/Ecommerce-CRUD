import { useProducts } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import Banner from "../components/Banner";

export default function Home({searchTerm}) {
  const { products, loading } = useProducts();

  if (loading) return <Loader />;

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <Banner/>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
    </>
  );
}
