import styled from "./title.module.css";

interface TitleProps {
  children?: JSX.Element | JSX.Element[] | string;
}

export const Title = ({ children }: TitleProps) => {
  return <h1 className={styled.h1}>{children}</h1>;
};
