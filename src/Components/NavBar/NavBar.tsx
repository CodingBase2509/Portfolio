import "./NavBar.scss";

import NavigationItem from "../../Contracts/NavigationItem";

const NavBar = ({
  navItems,
  className,
}: {
  navItems: NavigationItem[];
  className?: string;
}) => {
  const openMenu = () => {
    const menu = document.getElementById("nav-menu") as HTMLElement;
    menu.classList.toggle("open");
    const menuTop = document.getElementById("nav-menu-top") as HTMLElement;
    menuTop.classList.toggle("open");
  };

  return (
    <nav className={className + " " + "nav-menu-top"}>
      <nav className="nav-menu" id="nav-menu">
        <ul className="nav-list">
          {navItems
            .sort((a, b) => a.position - b.position)
            .map((item) => {
              return (
                <li key={item.position} className="nav-list-item">
                  <a className="underline-link" href={item.link}>
                    {item.name}
                  </a>
                </li>
              );
            })}
        </ul>
      </nav>
      <div className="hamburger-menu" onClick={openMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default NavBar;
