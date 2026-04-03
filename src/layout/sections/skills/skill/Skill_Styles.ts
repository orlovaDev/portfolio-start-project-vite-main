import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";

const Skill = styled.div`
  max-width: 120px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  transition: transform 0.3s ease;
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);

  svg {
    width: 120px;
    height: 120px;
    flex-shrink: 0;
    object-fit: contain;

    @media ${theme.media.mobile} {
      width: 80px;  
      height: 80px;
    }
  }
`

const Title = styled.h3`
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-align: center;
  color: ${theme.colors.font};

  @media ${theme.media.mobile} {
    font-size: 12px; 
  }
`

export const S = {
  Skill,
  Title,
}