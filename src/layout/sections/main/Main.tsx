import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";
import {Scroll} from "../../../components/scroll/Scroll.tsx";
import {MainLink} from "../../../components/mainLink/MainLink.tsx";
// import photo from "./../../../assets/images/photo.webp"

export const Main = (props: { id: string }) => {
  return (
    <StyledMain id={props.id}>
      <Container>
        <FlexWrapper
          align={'center'}
          justify={'space-between'}
          wrap={'wrap'}
          height={'100%'}
        >
          <ContentWrapper>
            <StyledMainTitle>WEB DEVELOPER</StyledMainTitle>
            <StyledName>Anastasiya Orlova</StyledName>
            <StyledText>Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet sint. Velit officia consequat duis enim velit
              mollit. Exercitation
              veniam consequat sunt.</StyledText>
            <MainLink />
          </ContentWrapper>

          <Icon
            iconId={'photo'}
            width={'460'}
            height={'330'}
            viewBox={'0 0 460 330'}
          />

          {/*<StyledPhoto*/}
          {/*  src={photo}*/}
          {/*  alt="img"*/}
          {/*/>*/}
        </FlexWrapper>
        <Scroll />
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
  position: relative;
  //overflow: hidden;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  text-align: left;
  max-width: 515px;
`

const StyledMainTitle = styled.h1`
  font-family: "Tinos", sans-serif;
  font-weight: 400;
  font-size: 30px;
  color: ${theme.colors.headerText};
`

const StyledName = styled.span`
  font-weight: 600;
  font-size: 72px;
  line-height: 1.1;
  background: ${theme.colors.accent};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const StyledText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${theme.colors.font};
  margin-bottom: 20px;
`
// const StyledPhoto = styled.img`
//   max-width: 460px;
//   width: 100%;
//   height: 450px;
//   object-fit: cover;
// `










