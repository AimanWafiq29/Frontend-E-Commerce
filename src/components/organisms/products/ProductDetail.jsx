import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../../context/ShopContext";
import ProductName from "../../atoms/products/ProductName";
import ProductRating from "../../atoms/products/ProductRating";
import ProductPrice from "../../atoms/products/ProductPrice";
import ProductGallery from "../../molecules/products/ProductGallery";
import ProductSizeSelector from "../../molecules/products/ProductSizeSelector";
import ProductActions from "../../molecules/products/ProductActions";

const ProductDetail = () => {
    const { productId } = useParams();
    const { products, currency, addToCart } = useContext(ShopContext);
    const [productData, setProductData] = useState(null);
    const [size, setSize] = useState(null);

    useEffect(() => {
        const product = products.find((item) => item._id === productId);
        if (product) setProductData(product);
    }, [productId, products]);

    if (!productData) return <div className="opacity-0"></div>;

    return (
        <div className="border-t-2 pt-10">
            <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
                <ProductGallery images={productData.image} />
                <div className="flex-1">
                    <ProductName name={productData.name} />
                    <ProductRating rating={4} reviews={122} />
                    <ProductPrice price={productData.price} currency={currency} />
                    <ProductSizeSelector sizes={productData.sizes} selectedSize={size} onSelect={setSize} />
                    <ProductActions onAddToCart={() => addToCart(productData._id, size)} />
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
