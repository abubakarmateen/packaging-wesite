import React from "react";
import { FaTimes } from "react-icons/fa";

export default function ProductDetailModal({ product, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center px-4 py-8">
      <div className="bg-white p-6 max-w-4xl w-full relative shadow-lg overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl text-gray-700">
          <FaTimes />
        </button>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Thumbnails */}
          <div className="flex flex-col gap-2">
            {product.thumbnails.map((thumb, i) => (
              <img
                key={i}
                src={thumb}
                alt=""
                className="w-16 h-16 object-cover border"
              />
            ))}
          </div>

          {/* Main Image */}
          <img
            src={product.image}
            alt=""
            className="w-full md:w-64 h-auto object-cover"
          />

          {/* Info */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="my-1">${product.price}</p>

            <div className="flex gap-4 my-3">
              <select className="border px-3 py-2">
                {product.colors.map((c, i) => (
                  <option key={i}>{c}</option>
                ))}
              </select>
              <select className="border px-3 py-2">
                {product.sizes.map((s, i) => (
                  <option key={i}>{s}</option>
                ))}
              </select>
            </div>

            <button className="bg-black text-white px-4 py-2 my-2 rounded">
              Add to Cart
            </button>

            <p className="text-sm text-gray-600 mt-4">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
