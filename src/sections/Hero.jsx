import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Navbar from "./Navbar";

const Hero = () => {
  useGSAP(() => {
    // create a timeline
    const tl = gsap.timeline({
      delay: 0.5,
      ease: "power1.inOut",
    });

    // animate the hero image
    tl.from(".hero-img", {
      // yPercent: 100,
      opacity: 0,
      duration: 1,
    })
      .from(".hero-filled-title", {
        opacity: 0,
      })
      .from(
        ".hero-outlined-title",
        {
          opacity: 0,
        },
        "<"
      );

    gsap.to(".hero-filled-title", {
      yPercent: -100,
      scrollTrigger: {
        trigger: ".hero-container",
        start: "top top",
        end: "bottom center",
        scrub: true,
      },
    });
    gsap.to(".hero-outlined-title", {
      yPercent: -100,
      scrollTrigger: {
        trigger: ".hero-container",
        start: "top top",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="h-screen w-full">
      {/* Navbar */}
      <Navbar />

      {/* hero container */}
      <div className="hero-container overflow-hidden">
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
