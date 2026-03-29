import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";

const Slogan = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 60px;

  @media ${theme.media.tablet} {
    gap: 30px; 
    //margin-bottom: 20px; 
  }
`

const Title = styled.h2`
  font-weight: 500;
  font-size: clamp(32px, 5vw, 50px);
  background: ${theme.colors.accent};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${theme.media.mobile} {
    font-size: 25px;
    text-align: justify;
  }
`

const Text = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.5;
  color: ${theme.colors.font};

  @media ${theme.media.mobile} {
    font-size: 14px;
    text-align: justify;
  }
`
export const S = {
  Slogan,
  Title,
  Text,
}
