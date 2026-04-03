import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Container} from "../../../components/Container.ts";
import {Scroll} from "./scroll/Scroll.tsx";
import React from "react";
import {S} from "././Main_Styles.ts";
import Typewriter from 'typewriter-effect';
import {MainLink} from "./link/Link.tsx";
// import myhoto from '../../../assets/images/photo.webp'

export const Main: React.FC<{ id: string }> = (props: { id: string }) => {
  return (
    <S.Main id={props.id}>
      <Container>
        <FlexWrapper
          align={'center'}
          justify={'space-between'}
          wrap={'wrap-reverse'}
          height={'100%'}
        >
          <S.ContentWrapper>
            {/*<S.MainTitle>WEB DEVELOPER</S.MainTitle>*/}
            <S.MainTitle>
              <p>WEB DEVELOPER</p>
              <Typewriter
                options={{
                  strings: ['WEB DEVELOPER', 'FRONTEND DEVELOPER'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </S.MainTitle>
            <S.Name>Anastasiya Orlova</S.Name>
            <S.Text>Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet sint. Velit officia consequat duis enim velit
              mollit. Exercitation
              veniam consequat sunt.</S.Text>
            <MainLink />
          </S.ContentWrapper>
          <S.IconWrapper>
            {/*<S.Photo*/}
            {/*  src={myhoto}*/}
            {/*  alt="photo"*/}
            {/*/>*/}
            <Icon
              iconId={'photo'}
              width={'460'}
              height={'330'}
              viewBox={'0 0 460 330'}
            />
          </S.IconWrapper>
        </FlexWrapper>
        <Scroll />
      </Container>
    </S.Main>
  );
};













