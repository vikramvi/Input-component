import "./Nav.css";

const Nav = ({ links }) => {
  const buildNavLinks = () => {
    return links.map((link) => (
      <li
        key={link}
        className={`nav-link ${link === "buttons"} ? "active" : ""}`}
      >
        {link}
      </li>
    ));
  };

  return (
    <nav className="nav">
      <ul className="nav-list">{buildNavLinks()}</ul>
    </nav>
  );
};

export default Nav;
