import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import ProductDetail from "../components/organisms/products/ProductDetail";
import ProductList from "../components/organisms/products/ProductList";

const Product = () => {
  const { productId } = useParams(); // Ambil ID dari URL
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [size, setSize] = useState(null);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
    }
  }, [productId, products]);

  useEffect(() => {
    if (products.length > 0 && productData) {
      const filteredProducts = products
        .filter((item) => item.category === productData.category)
        .filter((item) => item.SubCategory === productData.SubCategory)
        .filter((item) => item._id !== productData._id); // Hindari produk yang sama

      setRelated(filteredProducts.slice(0, 5));
    }
  }, [products, productData]);

  if (!productData) return <div>Loading...</div>;

  return (
    <div>
      <ProductDetail 
        product={productData} 
        currency={currency} 
        size={size} 
        setSize={setSize} 
        addToCart={addToCart} 
      />
      <ProductList title="Related Products" products={related} currency={currency} />
    </div>
  );
};

export default Product;
