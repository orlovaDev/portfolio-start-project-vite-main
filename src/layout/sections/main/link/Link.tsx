import React from "react";
import {S} from "././Link_Styles.ts"

export const MainLink: React.FC = () => {
  return (
    <S.MainLink
      activeClass="active"
      to={"contacts"}
      spy={true}
      smooth={true}
      delay={300}
    >
      Contact Me
    </S.MainLink>
  );
};

