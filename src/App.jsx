import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

import { ReactLenis, useLenis } from "lenis/react";

import About from "./components/About";
import Hero from "./components/Hero";
import Technolgoies from "./components/Technolgoies";

// register gsap plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  const lenis = useLenis();

  return (
    <main className="font-poppins">
      <ReactLenis root />
      <Hero />
      <About />
      <Technolgoies />
      {/* <div className="min-h-dvh bg-gradient"></div> */}
    </main>
  );
};

export default App;
