import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient text-white px-16 py-10 selection">
      <div className="flex-center justify-between">
        {/* left side of the footer */}
        <div className="flex-center gap-2">
          <p>&copy;{new Date().getFullYear()}</p>
          <p>Mushaf Hafeez.</p>
        </div>

        {/* center of the footer */}
        <div className="flex gap-2 items-center">
          <img src="/images/active.png" alt="" className="h-4" />
          <p>Available for work</p>
        </div>

        {/* right side of the footer */}
        <div className="flex-center gap-2">
          <a href="https://www.linkedin.com/in/mushafhafeez" target="_blank">
            <TiSocialLinkedin size={28} />
          </a>
          <a href="https://github.com/Mushaf-Hafeez" target="_blank">
            <FaGithub size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
