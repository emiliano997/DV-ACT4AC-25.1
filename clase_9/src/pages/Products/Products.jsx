import { useEffect } from "react";
import { useState } from "react";
import { useProducts } from "./hooks/useProducts";
import { ProductCard } from "./components/ProductCard";

export function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    useProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h2>Products Page </h2>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          description={product.description}
          title={product.title}
          price={product.price}
        />
      ))}
    </>
  );
}
