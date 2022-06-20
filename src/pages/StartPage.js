import React from "react";
import Discover from "../components/Discover/Discover";
import Carousel from "../components/Carousel/Carousel";
import BlogsCards from "../components/Cards/BlogsCards";
import Footer from "../components/Footer/Footer";
import HeaderLanding from "../components/Header/HeaderLanding";
import Hero from "../components/Hero";
import LandingSubscribe from "../components/LandingSubscribe/LandingSubscribe";
import Tabs from "../components/Tabs/Tabs.jsx";
import "../styles/css/Blogs.css";
import PreguntasCards from "../components/Cards/PreguntasCards";

const StarPage = () => {
  return (
    <>
      <HeaderLanding />
      <Hero />
      <section className="px-2">
        <Tabs />
      </section>
      <section>
        <Carousel />
      </section>
      <section>
        <Discover />
      </section>
      <section className="p-4" style={{ maxWidth: "1400px", margin: "auto" }}>
        <h2 className="blogs__title-main">Entérate de las últimas novedades</h2>
        <BlogsCards></BlogsCards>
      </section>
      <section className="p-4" style={{ maxWidth: "1400px", margin: "auto" }}>
        <PreguntasCards></PreguntasCards>
      </section>
      <section className="py-4">
        <Footer />
      </section>
    </>
  );
};

export default StarPage;
