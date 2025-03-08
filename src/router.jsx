import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/templates/MainLayout";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";

const Router = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Product/:id" element={<Product />} />
      </Routes>
    </MainLayout>
  );
};

export default Router;
