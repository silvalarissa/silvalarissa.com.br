import Image, { ImageProps } from "next/image";

import styled from "./avatar.module.css";

export const Avatar = ({ src, alt }: ImageProps) => {
  return (
    <div className={styled.border}>
      <Image className={styled.image} src={src} alt={alt} />
    </div>
  );
};
