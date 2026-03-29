import {theme} from "../../../styles/Theme.ts";
import styled from "styled-components";

const About = styled.section`
  padding-top: 140px;
  
  @media ${theme.media.tablet} {
    padding-top: 30px;
  }
`

const Text = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  color: ${theme.colors.font};
  position: relative;
  padding-left: 25px;
  
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%; 
    width: 5px;
    background: ${theme.colors.accent};
    border-radius: 2px;
    transform: none; 
  }

  @media ${theme.media.tablet} {
    font-size: 16px;
    &::before {
      width: 3px; 
    }
  }

  @media ${theme.media.mobile} {
    text-align: justify;
    font-size: 14px;
    padding-left: 0; 
    &::before { 
      display: none; 
    }
  }
`;

export const S = {
  About,
  Text,
}