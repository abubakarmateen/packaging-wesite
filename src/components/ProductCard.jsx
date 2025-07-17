import React from "react";
import { motion } from "framer-motion";

export default function ProductCard({ product, onViewDetails }) {
  return (
    <div className="relative bg-white border p-2 shadow group overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />

        {/* View Details Button */}
        <motion.button
          initial={{ y: 60, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 rounded opacity-0 group-hover:opacity-100"
          onClick={onViewDetails}>
          View Details
        </motion.button>
      </div>

      <div className="mt-2 text-center">
        <h3 className="text-sm font-medium">{product.name}</h3>
        <p className="text-sm text-gray-600">
          {product.oldPrice && (
            <span className="line-through mr-2">${product.oldPrice}</span>
          )}
          <span className="text-black">${product.price}</span>
        </p>
      </div>
    </div>
  );
}
