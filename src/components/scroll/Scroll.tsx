import styled, {keyframes} from "styled-components";
import {Icon} from "../icon/Icon.tsx";

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
  //transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px; 
  height: 40px;
  transition: opacity 0.3s ease;
  animation: ${bounce} 2s infinite ease-in-out;

  &:hover {
    animation-play-state: paused; 
    opacity: 0.7;
  }
`;