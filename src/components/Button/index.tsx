import Link, { LinkProps } from "next/link";
import styled from "./button.module.css";

interface ButtonProps extends LinkProps {
  children?: string;
  variant?: "primary" | "secondary";
}

export const Button = ({
  children,
  variant = "primary",
  ...rest
}: ButtonProps) => {
  return (
    <Link
      className={variant === "primary" ? styled.primary : styled.secondary}
      {...rest}
    >
      {children}
    </Link>
  );
};
