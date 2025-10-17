import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Buy from "./pages/Buy";

export default function App() {
  return (
    <BrowserRouter>
      <header className="bg-blue-600 text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between">
          <Link to="/" className="font-bold">Local Store</Link>
          <Link to="/cart" className="underline">Cart</Link>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/buy" element={<Buy />} />
      </Routes>
    </BrowserRouter>
  );
}
