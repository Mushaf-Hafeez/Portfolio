import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section className="h-screen w-full">
      {/* Navbar */}
      <Navbar />

      {/* hero container */}
      <div className="hero-container">
        {/* hero headings */}
        <div>
          <h1 className="hero-filled-title">MERN Developer</h1>
          <h1 className="hero-outlined-title">MERN Developer</h1>
        </div>

        <span className="hero-white-gradient"></span>

        {/* hero image */}
        <img src="/images/hero-beard.png" alt="hero-img" className="hero-img" />
      </div>
    </section>
  );
};

export default Hero;
