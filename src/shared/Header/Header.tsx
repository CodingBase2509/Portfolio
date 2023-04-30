import logoFD from "/logoFD.svg";
import xing from "/xing.svg";
import linkedIn from "/linkedIn.svg";
import envelope from "/envelope.svg";
import github from "/github.svg";
import NavBar from "../NavBar/NavBar";
import "./Header.scss";

import { navItems } from "../../Data/NavBarItems";

const Header = () => {
  return (
    <>
      <header className="header">
        <img src={logoFD} className="logofd" alt="Fabian Dasler logo" />
        <NavBar className="navbar" navItems={navItems} />
        <div className="navbar-placeholder"></div>
        <div className="social-media">
          <img src={xing} className="logo-s" alt="Xing logo" />
          <img src={linkedIn} className="logo-s" alt="LinkedIn logo" />
          <img src={envelope} className="logo-s" alt="Email logo" />
          <img src={github} className="logo-s" alt="GitHub logo" />
        </div>
      </header>
    </>
  );
};

export default Header;
