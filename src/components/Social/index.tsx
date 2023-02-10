import Link from "next/link";
import { InstagramLogo, LinkedinLogo, GithubLogo } from "phosphor-react";

import styled from "./social.module.css";

export const Social = () => {
  return (
    <ul className={styled.listSocial}>
      <li>
        <Link href="https://www.instagram.com/lareslva/" target={"_blank"}>
          <InstagramLogo size={28} className={styled.listSocialIcon} />
        </Link>
      </li>
      <li>
        <Link href="https://www.linkedin.com/in/larissaslv/" target={"_blank"}>
          <LinkedinLogo size={28} className={styled.listSocialIcon} />
        </Link>
      </li>

      <li>
        <Link href="https://github.com/silvalarissa" target={"_blank"}>
          <GithubLogo size={28} className={styled.listSocialIcon} />
        </Link>
      </li>
    </ul>
  );
};
