import "./Header.scss";
import { TextParameter } from "../../../contracts/Parameter";

const SecondaryHeader = ({ className, children }: TextParameter) => {
  return <h3 className={className + " " + "header-sec"}>{children}</h3>;
};

export default SecondaryHeader;
