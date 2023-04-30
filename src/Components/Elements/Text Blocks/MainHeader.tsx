import "./Header.scss";
import { TextParameter } from "../../../contracts/Parameter";

const MainHeader = ({ className, children }: TextParameter) => {
  return <h1 className={className + " " + "header-main"}>{children}</h1>;
};

export default MainHeader;
