import {Icon} from "../../../components/icon/Icon.tsx";
import React from "react";
import {S} from "./Logo_Styles.ts"
import {animateScroll as scroll} from 'react-scroll';

export const Logo: React.FC = () => {
  return (
    <S.Logo onClick={() => scroll.scrollToTop()} aria-label="Home">
      <Icon iconId={'logo'} width={'40'} height={'40'} viewBox={'0 0 40 40'}/>
    </S.Logo>
  );
};




