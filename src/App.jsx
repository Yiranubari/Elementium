import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import OfferingsSection from "./components/OfferingsSection.jsx";
import TestimonialSection from "./components/TestimonialSection.jsx";
import NewsletterSection from "./components/NewsletterSection.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll(".motion-fade-up"));

    if (!targets.length) return;

    if (typeof IntersectionObserver === "undefined") {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
