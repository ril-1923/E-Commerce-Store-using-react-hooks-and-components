import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

function Home() {

  const { search } = useContext(StoreContext);

  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [productList, setProductList] = useState([]);

  useEffect(() => {

    const timer = setTimeout(() => {

      setProductList(products);

      setLoading(false);

    }, 2000);

    return () => clearTimeout(timer);

  }, []);

  const filteredProducts = productList.filter((product) => {

    const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

    return matchesSearch && matchesCategory;

});

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container my-5">

      <h2 className="text-center mb-4">
        Our Products
      </h2>
<div className="text-center mb-4">

    <button
        className={`btn me-2 ${
            selectedCategory === "All"
                ? "btn-primary"
                : "btn-outline-primary"
        }`}
        onClick={() => setSelectedCategory("All")}
    >
        All
    </button>

    <button
        className={`btn me-2 ${
            selectedCategory === "Electronics"
                ? "btn-primary"
                : "btn-outline-primary"
        }`}
        onClick={() => setSelectedCategory("Electronics")}
    >
        Electronics
    </button>

    <button
        className={`btn me-2 ${
            selectedCategory === "Accessories"
                ? "btn-primary"
                : "btn-outline-primary"
        }`}
        onClick={() => setSelectedCategory("Accessories")}
    >
        Accessories
    </button>

    <button
        className={`btn me-2 ${
            selectedCategory === "Audio"
                ? "btn-primary"
                : "btn-outline-primary"
        }`}
        onClick={() => setSelectedCategory("Audio")}
    >
        Audio
    </button>

    <button
        className={`btn ${
            selectedCategory === "Wearables"
                ? "btn-primary"
                : "btn-outline-primary"
        }`}
        onClick={() => setSelectedCategory("Wearables")}
    >
        Wearables
    </button>

</div>
      <div className="row">

        {filteredProducts.map((product) => (

          <div
            className="col-md-4 mb-4"
            key={product.id}
          >

            <ProductCard product={product} />

          </div>

        ))}

      </div>

    </div>
  );
}

export default Home;