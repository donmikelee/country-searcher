import ThemeSwitcher from "../../controls/ThemeSwitcher/ThemeSwitcher";

const Nav = () => {
  return (
    <nav className="navigation">
      <div className="logo">
        <a href="/" className="logo-link">
          Where in the world?
        </a>
      </div>
        <ThemeSwitcher/>
    </nav>
  );
};

export default Nav;
