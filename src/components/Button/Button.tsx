/** @jsxImportSource theme-ui */

import React from "react";
import { WithChildren } from "../../utils/types";
import { Button } from "theme-ui";

export type ButtonProps = WithChildren<{
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "success" | "info" | "warning" | "error";
}>;

const MyButton = ({
  children,
  variant = "contained",
  color = "primary",
}: ButtonProps) => {
  return (
    // <Button ml={1} sx={{ variant: `buttons.${color}` }}>
    <Button ml={1} variant={color}>
      {children}
    </Button>
  );
};

export default MyButton;
