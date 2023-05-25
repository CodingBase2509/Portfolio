import { ReactNode } from "react";

export default interface SerivceItem {
  title: string;
  text: string;
  navLink: string;
  imageComponent: () => JSX.Element;
}
