import React from "react";
import { Link } from "react-router-dom";
export default function ProductCard({ product, onAdd }) {
  return (
    <div className="border rounded overflow-hidden shadow hover:shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h2 className="font-semibold text-lg">{product.name}</h2>
        <p className="text-gray-600">₹{product.price.toFixed(2)}</p>
        <p className="text-sm my-2">
          {product.description?.substring(0, 60)}...
        </p>
        <button
          onClick={() => onAdd(product)}
          className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Add&nbsp;to&nbsp;Cart
        </button>
        <Link to="/cart" className="ml-3 text-blue-600 underline text-sm">
          Go&nbsp;to&nbsp;Cart
        </Link>
      </div>
    </div>
  );
}
