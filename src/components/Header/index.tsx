import { Avatar } from "../Image";
import { Subtitle } from "../Subtitle";
import { Title } from "../Title";
import styled from "./header.module.css";

import profilePic from "public/assets/img/me.jpg";

export const Header = () => {
  return (
    <header className={styled.header}>
      <Avatar src={profilePic} alt="Foto da autora do blog." />

      <div className={styled.title}>
        <Title>Larissa Silva</Title>
        <Subtitle>Front-End Developer</Subtitle>
      </div>
    </header>
  );
};
