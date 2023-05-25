import logoFD from "/logoFD.svg";
import "./Header.scss";

import { navItems } from "../../Data/NavBarItems";

import NavBar from "../NavBar/NavBar";
import Xing from "../Shared/SocialMedia/Xing";
import GitHub from "../Shared/SocialMedia/Github";
import LinkedIn from "../Shared/SocialMedia/LinkedIn";
import Mail from "../Shared/SocialMedia/Mail";

const Header = () => {
  return (
    <>
      <header className="header">
        <img src={logoFD} className="logofd" alt="Fabian Dasler logo" />
        <NavBar className="navbar" navItems={navItems} />
        <div className="navbar-placeholder"></div>
        <div className="social-media">
          <Xing className="logo-s" />
          <LinkedIn className="logo-s" />
          <Mail className="logo-s" />
          <GitHub className="logo-s" />
        </div>
      </header>
    </>
  );
};

export default Header;
