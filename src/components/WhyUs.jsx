import { useEffect, useState } from "react";

function Counter({ target, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const increment = end / 50;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 40);
  }, [target]);

  return (
    <div className="text-center">
      <p className="text-4xl font-bold text-green-600">{count}+</p>
      <p className="text-lg">{label}</p>
    </div>
  );
}

function WhyUs() {
  return (
    <section className="p-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">Why Choose Us?</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <Counter target={5000} label="Boxes Shipped" />
        <Counter target={3000} label="Happy Clients" />
        <Counter target={100} label="Customization Options" />
        <Counter target={7} label="Days Avg Delivery" />
      </div>
    </section>
  );
}

export default WhyUs;
