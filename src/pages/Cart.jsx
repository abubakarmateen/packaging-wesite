import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaTrashAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const cartItems = [
  {
    id: 1,
    name: "Custom Box",
    price: 12.99,
    quantity: 2,
    image: "/daily-nouri-E5Oo4nENq2M-unsplash.jpg",
  },
  {
    id: 2,
    name: "Eco Bag",
    price: 7.5,
    quantity: 1,
    image: "/sticker-mule-pg6MTKrHheA-unsplash.jpg",
  },
];

function Cart() {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gradient-to-tr from-green-50 to-white py-16 px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mt-20 mb-5 text-green-700 text-center">
            Your Cart
          </h2>

          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 text-lg">
              Your cart is empty.
            </p>
          ) : (
            <div className="bg-white p-6 rounded-3xl shadow-2xl space-y-6">
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center justify-between bg-green-50 hover:bg-green-100 transition rounded-xl p-4 shadow-sm">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-xl shadow-md"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-green-800">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        Quantity:{" "}
                        <span className="font-semibold">{item.quantity}</span>
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-semibold text-green-700">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button className="text-red-500 hover:text-red-700 mt-1 transition">
                      <FaTrashAlt />
                    </button>
                  </div>
                </motion.div>
              ))}

              {/* Total Section */}
              <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                <h3 className="text-2xl font-bold text-green-800">Total</h3>
                <span className="text-2xl font-bold text-green-700">
                  ${total.toFixed(2)}
                </span>
              </div>

              <button className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white text-lg font-semibold py-3 rounded-full hover:scale-105 hover:shadow-lg transition">
                Proceed to Checkout
              </button>
            </div>
          )}
        </motion.div>
      </div>

      <Footer />
    </>
  );
}

export default Cart;
