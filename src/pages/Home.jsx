import React, { useContext, useMemo } from "react";
import HeroSection from "../components/organisms/HeroSection";
import { ShopContext } from "../context/ShopContext";
import ProductList from "../components/organisms/ProductList";
import SectionTitle from "../components/molecules/SectionTitle";
import FeatureItem from "../components/molecules/FeatureItem";
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

      {/* Latest Collection */}
      <div className="my-10">
        <SectionTitle title="Latest Collection" paragraph="Explore our high-quality products carefully curated for you." />
        <ProductList products={latestProducts} currency={currency} />
      </div>

      {/* Best Sellers */}
      <div className="my-10">
        <SectionTitle title="Best Sellers" paragraph="Explore our high-quality products carefully curated for you." />
        <ProductList products={bestSeller} currency={currency} />
      </div>

    {/* Features */}
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 py-20 text-xs sm:text-sm md:text-base text-gray-700">
        <FeatureItem icon={ExchangeIcon} title="Easy Exchange Policy" description="We offer hassle-free exchange policy" />
        <FeatureItem icon={QualityIcon} title="7 Days Return Policy" description="We provide 7 days free return policy" />
        <FeatureItem icon={SupportIcon} title="Best Customer Support" description="We provide 24/7 customer support" />
      </div>

    </div>
  );
};

export default Home;
