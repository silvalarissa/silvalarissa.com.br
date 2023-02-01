import { Button } from "../Button";
import styled from "./navigation.module.css";

export const Navigation = () => {
  return (
    <nav>
      <ul className={styled.list}>
        <li>
          <Button href="/">Início</Button>
        </li>
        <li>
          <Button href="/">Blog</Button>
        </li>
        <li>
          <Button href="/">Sobre Mim</Button>
        </li>
        <li>
          <Button href="/">Projetos</Button>
        </li>
      </ul>
    </nav>
  );
};
