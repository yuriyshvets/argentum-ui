import React from "react";
import { WithChildren } from "../../utils/types";

export type ButtonProps = WithChildren<{
  variant?: "contained" | "outlined" | "text";
}>;

const Button = ({ children, variant = "contained" }: ButtonProps) => {
  return <button>{children}</button>;
};

export default Button;
