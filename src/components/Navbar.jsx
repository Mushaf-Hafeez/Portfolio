import { navItems } from "../constant";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3 className="nav-title">
        <a href="#hero">Portfolio</a>
      </h3>

      <ul className="flex items-center gap-4">
        {navItems.map(({ id, title, href }) => (
          <li key={id}>
            <a href={href}>{title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
