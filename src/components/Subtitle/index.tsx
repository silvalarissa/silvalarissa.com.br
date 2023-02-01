import styled from "./subtitle.module.css";
interface SubtitleProps {
  children?: JSX.Element | JSX.Element[] | string;
}

export const Subtitle = ({ children }: SubtitleProps) => {
  return <h2 className={styled.h2}>{children}</h2>;
};
