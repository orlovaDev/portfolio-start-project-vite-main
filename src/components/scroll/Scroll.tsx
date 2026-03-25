import styled, {keyframes} from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {theme} from "../../styles/Theme.ts";

export const Scroll = () => {
  return (
    <StyledScroll href="#about">
      <Icon iconId={'scroll'} width={'18'} height={'28'} viewBox="0 0 18 28"/>
    </StyledScroll>
  );
};

const bounce = keyframes`
  0%, 100% { transform: translateX(-50%) translateY(0); opacity: 1;}
  50% { transform: translateX(-50%) translateY(10px); opacity: 0.5;}
`;

const StyledScroll = styled.a`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);  //Указываем начальное состояние
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px; 
  height: 40px;
  animation: ${bounce} 2s infinite ease-in-out;

  @media ${theme.media.tablet} {
    display: none;
  }
  
  &:hover {
    animation-play-state: paused;
  }
`;