import "./Header.scss";
import { FullChildParameter } from "../../../contracts/Parameter";

const MainHeader = ({ className, children }: FullChildParameter) => {
  return <h1 className={className + " " + "header-main"}>{children}</h1>;
};

export default MainHeader;
