import React, { useContext, useEffect, useState } from "react";
import HeroSection from "../components/organisms/HeroSection";
import { ShopContext } from "../context/ShopContext";
import ProductList from "../components/organisms/ProductList";

const Home = () => {
  const { products, currency } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div>
      <HeroSection />
      <ProductList products={latestProducts} currency={currency} />
    </div>
  );
};

export default Home;
