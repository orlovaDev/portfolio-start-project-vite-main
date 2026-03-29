import {Icon} from "../../../../components/icon/Icon.tsx";
import React from "react";
import {S} from "./Scroll_Styles.ts";


export const Scroll: React.FC = () => {
  return (
    <S.Scroll href="#about">
      <Icon iconId={'scroll'} width={'18'} height={'28'} viewBox="0 0 18 28"/>
    </S.Scroll>
  );
};

