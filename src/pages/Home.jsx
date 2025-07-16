import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductCategories from "../components/ProductCategories";
import Customizer from "../components/Customizer";
import WhyUs from "../components/WhyUs";
import Timeline from "../components/Timeline";
import Testimonials from "../components/Testimonials";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import BlogSection from "../components/Blog";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ProductCategories />
      <Customizer />
      <WhyUs />
      <Timeline />
      <Partners />
      <BlogSection />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
