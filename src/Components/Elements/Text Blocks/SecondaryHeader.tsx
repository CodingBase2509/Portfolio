import { FullChildParameter } from "../../../contracts/Parameter";
import "./Header.scss";

const SecondaryHeader = ({ className, children }: FullChildParameter) => {
  return <h3 className={className + " " + "header-sec"}>{children}</h3>;
};

export default SecondaryHeader;
