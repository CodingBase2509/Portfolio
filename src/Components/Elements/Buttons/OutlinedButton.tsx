import "./Button.scss";

import { ButtonParameter } from "../../../contracts/Parameter";

const OutlinedButton = ({ className, children, onClick }: ButtonParameter) => {
  return (
    <button
      className={className + " " + "button-default button-outlined"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default OutlinedButton;
