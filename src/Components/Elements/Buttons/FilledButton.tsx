import "./Button.scss";

import { ButtonParameter } from "../../../contracts/Parameter";

const FilledButton = ({ className, children, onClick }: ButtonParameter) => {
  return (
    <button
      className={className + " " + "button-default button-filled"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default FilledButton;
