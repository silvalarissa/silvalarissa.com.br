import styled from "./wrapper.module.css";

interface WrapperProps {
  children?: JSX.Element | JSX.Element[];
}

export const Wrapper = ({ children }: WrapperProps) => {
  return <main className={styled.wrapper}>{children}</main>;
};
