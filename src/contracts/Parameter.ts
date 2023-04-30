import { MouseEventHandler } from "react";

export interface BaseParameter {
  className?: string;
}

export interface TextParameter extends BaseParameter {
  children: string;
}

export interface ButtonParameter extends TextParameter {
  onClick: MouseEventHandler<HTMLButtonElement>;
}
