import Link from "next/link";
import styled from "./navigation.module.css";

export const Navigation = () => {
  return (
    <nav>
      <ul className={styled.list}>
        <li>
          <Link className={styled.link} href="#">
            Início
          </Link>
        </li>
        <li>
          <Link className={styled.link} href="#">
            Blog
          </Link>
        </li>
        <li>
          <Link className={styled.link} href="#">
            Sobre Mim
          </Link>
        </li>
        <li>
          <Link className={styled.link} href="#">
            Projetos
          </Link>
        </li>
      </ul>
    </nav>
  );
};
