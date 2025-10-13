import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white px-4 py-2 md:px-16 md:py-10 selection">
      <div className="flex-center justify-between">
        {/* left side of the footer */}
        <div className="hidden md:block flex-center gap-2">
          <p>&copy;{new Date().getFullYear()}</p>
          <p>Mushaf Hafeez.</p>
        </div>

        {/* center of the footer */}
        <div className="flex gap-2 items-center">
          <img src="/images/active.png" alt="" className="h-3 md:h-4" />
          <p className="text-xs md:text-lg">Available for work</p>
        </div>

        {/* right side of the footer */}
        <div className="flex items-center gap-2 mx-4">
          <a href="https://www.linkedin.com/in/mushafhafeez" target="_blank">
            <TiSocialLinkedin className="size-4 md:size-6" />
          </a>
          <a href="https://github.com/Mushaf-Hafeez" target="_blank">
            <FaGithub className="size-4 md:size-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
