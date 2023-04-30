import { MouseEventHandler, ReactNode } from "react";

export interface BaseParameter {
  className?: string;
}

export interface TextParameter extends BaseParameter {
  children: string;
}

export interface FullChildParameter extends BaseParameter {
  children: ReactNode;
}

export interface ButtonParameter extends FullChildParameter {
  onClick: MouseEventHandler<HTMLButtonElement>;
}
