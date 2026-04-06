import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import OfferingsSection from "./components/OfferingsSection.jsx";
import TestimonialSection from "./components/TestimonialSection.jsx";
import NewsletterSection from "./components/NewsletterSection.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <OfferingsSection />
      <TestimonialSection />
      <NewsletterSection />
      <Footer />
    </>
  );
}
