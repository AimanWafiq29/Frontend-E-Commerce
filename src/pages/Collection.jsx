import React, { useEffect, useState, useContext } from "react";
import Title from "../components/atoms/typographys/Title";
import ProductList from "../components/organisms/products/ProductList";
import FilterPanel from "../components/organisms/filters/FilterPanel";
import { ShopContext } from "../context/ShopContext";

const Collection = () => {

  const { products, search, showSearch, currency } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const applyFilter = () => {
    let productsCopy = [...products]; // Salin array agar tidak mutasi langsung

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = [...filterProducts]; // Pastikan tidak mengubah array asli
    switch (sortType) {
      case 'low-high':
        fpCopy.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        fpCopy.sort((a, b) => b.price - a.price);
        break;
      default:
        applyFilter();
        return;
    }
    setFilterProducts(fpCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, products, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);


  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">

      {/* Filter Panel */}
      <FilterPanel
        isFilterVisible={showFilter} // ✅ Kirim boolean, bukan fungsi
        toggleFilter={() => setShowFilter(!showFilter)} // ✅ Kirim fungsi toggle
        category={category}
        subCategory={subCategory}
        toggleCategory={toggleCategory}
        toggleSubCategory={toggleSubCategory}
      />


      {/* Right Side */}
      <div className="flex-1">

        <div className="flex flex-wrap items-center justify-between text-base sm:text-2xl mb-4 gap-2">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />

          {/* Product Sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-3 py-2 rounded-lg w-full sm:w-40 md:w-48"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <ProductList products={filterProducts} currency={currency} />


      </div>


    </div>
  );
};

export default Collection;
