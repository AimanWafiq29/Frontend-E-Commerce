import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {

const { id } = useParams(); // Ambil ID dari URL


return <div className="text-center text-2xl font-bold bg-pink-600 py-96">
    Welcome to Product Page {id}
</div>;
};

export default Product;
