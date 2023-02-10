import { Button } from "@/components/Button";
import { Wrapper } from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import notFoundPic from "public/assets/img/notfound.gif";

const Custom404 = () => {
  return (
    <Wrapper>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h1>404!</h1>
        <p>A página que você procura não existe.</p>
      </div>

      <Button href={"/"}>Voltar ao início!</Button>

      <Image src={notFoundPic} alt={"Macaco jogando notebook."} />
    </Wrapper>
  );
};

export default Custom404;
