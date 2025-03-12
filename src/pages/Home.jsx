import React, { useContext, useMemo } from "react";
import { ShopContext } from "../context/ShopContext";
import FeatureItem from "../components/molecules/features/FeatureItem";
import SubscribeForm from "../components/molecules/forms/SubscribeForm";
import ProductList from "../components/organisms/products/ProductList";
import HeroSection from "../components/organisms/layout/HeroSection";
import QualityIcon from "../assets/quality_icon.png";
import SupportIcon from "../assets/support_img.png";
import ExchangeIcon from "../assets/exchange_icon.png";

const Home = () => {

  const { products, currency } = useContext(ShopContext);

  // Menggunakan useMemo untuk optimalisasi
  const latestProducts = useMemo(() => products?.slice(0, 10) || [], [products]);
  const bestSeller = useMemo(() => products?.filter(item => item.bestseller).slice(0, 5) || [], [products]);

  return (
    <div>
      <HeroSection />
      
      <ProductList
        products={latestProducts}
        currency={currency}
        title="Latest Collection"
        description="Explore our high-quality products carefully curated for you."
        columns="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
      />

      <ProductList
        products={bestSeller}
        currency={currency}
        title="Best Sellers"
        description="Explore our high-quality products carefully curated for you."
        columns="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
      />



      {/* Features */}
      <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 py-20 text-xs sm:text-sm md:text-base text-gray-700">
        <FeatureItem icon={ExchangeIcon} title="Easy Exchange Policy" description="We offer hassle-free exchange policy" />
        <FeatureItem icon={QualityIcon} title="7 Days Return Policy" description="We provide 7 days free return policy" />
        <FeatureItem icon={SupportIcon} title="Best Customer Support" description="We provide 24/7 customer support" />
      </div>

      <SubscribeForm />

    </div>
  );
};

export default Home;
