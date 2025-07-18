import logo1 from "/Vector (1).png";
import logo2 from "/Vector-1 (1).png";
import logo3 from "/Vector-1.png";
import logo4 from "/Vector-2 (1).png";
import logo5 from "/Vector-2.png";
import logo6 from "/Vector-3 (1).png";
import logo7 from "/Vector-3.png";
import logo8 from "/Vector-4 (1).png";
import logo9 from "/Vector-4.png";
import logo10 from "/Vector-5.png";

function Partners() {
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
  ];

  // Only repeat once for smoother performance
  const repeatedLogos = [...logos, ...logos];

  return (
    <section className="bg-green-700 py-14 overflow-hidden">
      <div className="w-full overflow-hidden relative">
        <div
          className="flex gap-12 animate-marquee will-change-transform"
          style={{ animation: "marquee 30s linear infinite" }}>
          {repeatedLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`brand-${index}`}
              loading="lazy"
              className="w-28 h-14 object-contain grayscale hover:grayscale-0 hover:scale-110 hover:shadow-[0_0_24px_0_rgba(34,197,94,0.35)] transition duration-300"
              style={{ filter: "drop-shadow(0 0 0 #16a34a00)" }}
            />
          ))}
        </div>
      </div>
      {/* Add keyframes for smooth animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </section>
  );
}

export default Partners;
