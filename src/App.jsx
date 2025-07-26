import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

import About from "./components/About";
import Hero from "./components/Hero";

// register gsap plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main className="font-poppins">
      <Hero />
      <About />
    </main>
  );
};

export default App;
