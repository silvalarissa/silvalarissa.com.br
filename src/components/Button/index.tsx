import Link, { LinkProps } from "next/link";
import styled from "./button.module.css";

interface ButtonProps extends LinkProps {
  children?: string;
  variant?: "primary" | "secondary";
}

export const Button = ({ children, variant = "primary" }: ButtonProps) => {
  return (
    <Link
      className={variant === "primary" ? styled.primary : styled.secondary}
      href="#"
    >
      {children}
    </Link>
  );
};
