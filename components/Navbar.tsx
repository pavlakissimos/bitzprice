import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
          <div className="navbar-item">
            <Link href="/about">
              <a>About</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
