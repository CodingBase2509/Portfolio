import "./Button.scss";

import { ButtonParameter } from "../../../Contracts/Parameter";

export const Button = ({ className, children, onClick }: ButtonParameter) => {
  return (
    <button className={className + " " + "button-default"} onClick={onClick}>
      {children}
    </button>
  );
};

export const FilledButton = ({ children, onClick }: ButtonParameter) => {
  return (
    <Button className="button-filled" onClick={onClick}>
      {children}
    </Button>
  );
};

export const OutlinedButton = ({ children, onClick }: ButtonParameter) => {
  return (
    <Button className="button-outlined" onClick={onClick}>
      {children}
    </Button>
  );
};
