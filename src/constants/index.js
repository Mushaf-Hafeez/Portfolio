// Navbar Links
export const navItems = [
  {
    id: 1,
    title: "Projects",
    href: "#project",
  },
  {
    id: 2,
    title: "About",
    href: "#about",
  },
  {
    id: 0,
    title: "Contact",
    href: "#contact",
  },
];

export const logos = [
  { path: "/images/logos/html.png", title: "HTML" },
  { path: "/images/logos/css.png", title: "CSS" },
  { path: "/images/logos/tailwind.webp", title: "Tailwind" },
  { path: "/images/logos/bootstrap.webp", title: "Bootstrap" },
  { path: "/images/logos/js.webp", title: "JavaScript" },
  { path: "/images/logos/react.webp", title: "React" },
  { path: "/images/logos/shadcn.webp", title: "ShadCN" },
  { path: "/images/logos/gsap.png", title: "GSAP" },
  { path: "/images/logos/nodejs.webp", title: "Node.js" },
  { path: "/images/logos/express.webp", title: "Express" },
  { path: "/images/logos/socket.png", title: "Socket.io" },
  { path: "/images/logos/jwt.png", title: "JSOn Web Token" },
  { path: "/images/logos/mongo.webp", title: "MongoDB" },
  { path: "/images/logos/git.webp", title: "Git" },
  { path: "/images/logos/github.webp", title: "Github" },
  { path: "/images/logos/npm.webp", title: "NPM" },
  { path: "/images/logos/render.webp", title: "Render" },
  { path: "/images/logos/vercel.webp", title: "Vercel" },
  { path: "/images/logos/hostinger.webp", title: "Hostinger" },
  { path: "/images/logos/vscode.png", title: "VS Code" },
  { path: "/images/logos/postman.png", title: "Postman" },
];

// project section slider images
export const sliderImages = [
  {
    src: "/images/slider-1.png",
    alt: "Image 1",
    link: "https://e-commerce-frontend-eight-alpha.vercel.app",
  },
  {
    src: "/images/slider-2.png",
    alt: "Image 2",
    link: "https://chat-app-frontend-nine-theta.vercel.app",
  },
  {
    src: "/images/slider-3.png",
    alt: "Image 3",
    link: "https://mern-memories-frontend.vercel.app",
  },
];

export const projects = [
  {
    id: 1,
    tag: "AI-Powered · Full Stack",
    status: "In Development",
    name: "PrepForge",
    description:
      "AI-powered interview prep platform that generates personalized questions, evaluates answers in real-time, and tracks performance across sessions. Built with raw PostgreSQL and Clerk webhook-based auth architecture.",
    techStack: [
      "React",
      "TypeScript",
      "PostgreSQL",
      "Clerk",
      "Anthropic API",
      "Tailwind CSS",
      "shadcn/ui",
      "Recharts",
      "Monaco Editor",
    ],
    github: "https://github.com/mushaf-hafeez/prepforge",
    live: false,
    accentColor: "#3b82f6",
  },
  {
    id: 2,
    tag: "Full Stack · Payments",
    status: "Deployed",
    name: "MERN E-Commerce",
    description:
      "Multi-role marketplace with buyer and seller accounts, Stripe payment integration with webhook-based order confirmation, email OTP verification, and Cloudinary for asset management.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "Cloudinary",
      "JWT",
    ],
    github: "https://github.com/Mushaf-Hafeez/E-Commerce-Frontend",
    live: "https://e-commerce-frontend-eight-alpha.vercel.app/",
    accentColor: "#3b82f6",
  },
  {
    id: 3,
    tag: "Real-time · Role-Based Access · FYP",
    status: "University Access Only",
    name: "AnonChat",
    description:
      "Anonymous messaging platform restricted to university email domains. Features role-based access where CR/GR roles can de-anonymize users for misconduct reporting. Real-time messaging via Socket.IO.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Tailwind CSS",
    ],
    github: "https://github.com/Mushaf-Hafeez/AnonChat-Frontend",
    live: false,
    accentColor: "#3b82f6",
  },
  {
    id: 4,
    tag: "Real-time · Full Stack",
    status: "Deployed",
    name: "MERN Chat App",
    description:
      "Real-time one-on-one messaging app with Socket.IO, profile picture uploads via Cloudinary, and JWT-based authentication.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Cloudinary",
      "JWT",
    ],
    github: "https://github.com/Mushaf-Hafeez/Chat-App-Frontend",
    live: "https://chat-app-frontend-nine-theta.vercel.app/",
    accentColor: "#3b82f6",
  },
  {
    id: 6,
    tag: "Full Stack · Social",
    status: "Deployed",
    name: "MERN Memories",
    description:
      "Social media app where users can create, like, and comment on memory posts. Clean MVC architecture on the backend with JWT auth and Cloudinary for image storage.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "JWT"],
    github: "https://github.com/Mushaf-Hafeez/mern-memories-frontend",
    live: "https://mern-memories-frontend.vercel.app/",
    accentColor: "#3b82f6",
  },
];
