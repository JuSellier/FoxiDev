import React, { useEffect } from "react";
import Header from "../Header/Header";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Footer from "../Footer/Footer";
import LightToggle from "../LightToggle/LightToggle";

const DefaultPage = ({ children }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    observeFadeIn();
  }, []);

  function observeFadeIn() {
    const animatedEls = document.querySelectorAll(".fade-in");

    animatedEls.forEach((el) => {
      const observer = new IntersectionObserver(
        (entries) => {
          const el = entries[0];
          // console.log(el);
          if (el.isIntersecting) {
            el.target.classList.add("visible");
            // observer.unobserve(el.target);
          } else {
            el.target.classList.remove("visible");
          }
        },
        {
          rootMargin: "-10%",
        }
      );
      observer.observe(el);
    });
  }

  return (
    <>
      <Header />
      {children}
      <Footer />

      <LightToggle />
      <ScrollToTop />
    </>
  );
};

export default DefaultPage;
