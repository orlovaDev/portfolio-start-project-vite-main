import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

const Footer = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 100px 0 20px 0;
  
  @media ${theme.media.tablet} {
    padding: 50px 0 20px 0; 
  }
`
const Name = styled.span`
  font-weight: 400;
  font-size: 15px;
  color: ${theme.colors.font};
  text-transform: uppercase;

  @media ${theme.media.mobile} {
    font-size: 13px;
  }
`

const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: clamp(30px, 10vw, 75px);
`

const SocialItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  
  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 93%;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    text-align: center;
    color: ${theme.colors.font};

    @media ${theme.media.mobile} {
      font-size: 10px;
    }
  }
`
const SocialLink = styled.a`
  max-width: 70px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
    filter: brightness(1.1);
  }

  &:active {
    transform: translateY(-1px) scale(0.98);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`

const SmallText = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.8;
  letter-spacing: 0.04em;
  text-align: center;
  color: ${theme.colors.font};
  
  @media ${theme.media.mobile} {
    font-size: 9px;
  }
`

export const S ={
  Footer,
  Name,
  SocialList,
  SocialItem,
  SocialLink,
  SmallText,
}