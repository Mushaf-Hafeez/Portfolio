import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section className="h-screen w-full">
      {/* Navbar */}
      <Navbar />

      {/* hero container */}
      <div className="relative h-full w-full bg-gradient text-white">
        {/* hero content */}
        <div>
          <h1 className="absolute left-1/2 -translate-x-1/2 top-1/2  whitespace-nowrap text-[11vw] font-bold shadow">
            MERN Developer
          </h1>
          <h1 className="absolute z-50 left-1/2 -translate-x-1/2 top-1/2  whitespace-nowrap text-[11vw] font-bold text-stroke">
            MERN Developer
          </h1>
        </div>

        <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full blur-3xl h-10/12 w-1/2 bg-zinc-300/20"></span>

        {/* hero image */}
        <img
          src="/images/hero-beard.png"
          alt="hero-img"
          className="absolute lg:-bottom-20 scale-80 z-40 w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
