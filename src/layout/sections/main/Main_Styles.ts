import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

const Main = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
 
  @media ${theme.media.tablet} {
    min-height: auto;
    padding-top: 90px;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  text-align: left;
  max-width: 515px;
  width: 100%;
  
  @media screen and (max-width: 1121px) {
    align-items: center;
    text-align: center;
    max-width: 100%;
  }
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 1121px) {
    justify-content: center;
    margin-bottom: 60px;
    width: 100%;
    svg {
      width: 100%;
      max-width: 400px;
      height: auto;
    }
  }

  @media ${theme.media.mobile} {
    svg {
      width: 70%;
      max-width: 300px;
      height: auto;
    }
  }
`
// const Photo = styled.img`
//   width: 100%;
//   max-width: 460px;
//   height: 400px;
//
// `

const MainTitle = styled.h1`
  font-family: "Tinos", sans-serif;
  font-weight: 400;
  font-size: 30px;
  color: ${theme.colors.headerText};
  p {
    display: none;
  }

    @media ${theme.media.mobile} {
    font-size: 18px;
  }
`

const Name = styled.span`
  font-weight: 600;
  font-size: 72px;
  line-height: 1.1;
  background: ${theme.colors.accent};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 1121px) {
    font-size: 60px;
  }

  @media ${theme.media.tablet} {
    font-size: 50px;
  }

  @media ${theme.media.mobile} {
    font-size: 30px;
  }
`

const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${theme.colors.font};
  margin-bottom: 20px;
  max-width: 100%;

  @media screen and (max-width: 1121px) {
    letter-spacing: 0.04em;
    max-width: 600px;
    margin: 0 auto 20px;
  }
  
  @media ${theme.media.mobile} {
    font-size: 14px;
    letter-spacing: 0.04em;
    text-align: justify;
  }
`

export const S = {
  Main,
  ContentWrapper,
  IconWrapper,
  // Photo,
  MainTitle,
  Name,
  Text,
}