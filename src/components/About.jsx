import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

import { ArrowDownToLine } from "lucide-react";

const About = () => {
  useGSAP(() => {
    // convert the titles into characters
    const splitGreet = SplitText.create("#greet-title", { type: "chars" });
    const splitName = SplitText.create("#name", { type: "chars" });
    const splitContent = SplitText.create("#about-content", { type: "words" });

    // create the timeline
    const tl = gsap.timeline({
      delay: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#about",
        start: "top top",
        end: "center top",
        scrub: true,
        pin: true,
      },
    });

    // animate the greeting title
    tl.from(splitGreet.chars, {
      opacity: 0,
      yPercent: 10,
      stagger: 0.05,
    })
      .from(splitName.chars, {
        opacity: 0,
        yPercent: 10,
        stagger: 0.05,
      })
      .from(splitContent.words, {
        opacity: 0.1,
        stagger: 0.05,
      })
      .from(".about-download-btn", {
        opacity: 0,
        yPercent: 50,
      });
  }, []);

  return (
    <section id="about" className="h-screen w-full bg-gradient text-white">
      {/* about container */}
      <div className="about-container">
        <h1 className="text-8xl font-bold selection">
          <p id="greet-title">Hi, I'm</p>
          <h2 id="name">Mushaf Hafeez</h2>
        </h1>

        {/* description */}
        <p id="about-content" className="text-2xl leading-10 selection">
          A MERN Stack Developer. I build full-stack web apps with MongoDB,
          Express, React, and Node.js, focusing on clean UI, secure backend, and
          real-time features. I love turning ideas into useful, scalable
          products.
        </p>

        {/* resume download button */}
        <a
          title="Download CV"
          href="/pdfs/Mushaf-Hafeez-CV.pdf"
          download={"Mushaf-Hafeez-CV.pdf"}
          className="about-download-btn flex-center gap-2 selection"
        >
          <span>Download CV</span>
          <ArrowDownToLine size={20} />
        </a>
      </div>
    </section>
  );
};

export default About;
