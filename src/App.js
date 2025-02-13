import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/base.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import NotFound from "./pages/errors/NotFound";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="**" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
