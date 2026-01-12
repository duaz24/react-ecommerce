import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage"; // <--- Importar a nova página
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { CartProvider } from "./context/CartContext";
import { initScrollAnimations } from "./scrollAnimations";

export default function App() {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  return (
    <CartProvider>
      <BrowserRouter>
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          
          <Navbar />
          
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<LandingPage />} /> {/* Nova Entrada */}
              <Route path="/loja" element={<Home />} />    {/* Produtos aqui */}
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </div>

          <Footer />
          
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
