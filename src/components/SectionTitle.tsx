import styled from "styled-components";
import {theme} from "../styles/Theme.ts";

export const SectionTitle = styled.h2`
  font-weight: 600;
  font-size: clamp(20px, 5vw, 32px);
  letter-spacing: 0.04em;
  line-height: 1.1;
  color: ${theme.colors.font};
  margin-bottom: 40px;
  
  @media ${theme.media.tablet} {
    
  }

  &::after {
    content: "";
    display: block;
    width: 50px;
    height: 3px;
    background: ${theme.colors.accent};
    margin-top: 5px;
    border-radius: 2px;
  }
`