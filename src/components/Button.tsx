import styled from "styled-components";
import {theme} from "../styles/Theme.ts";


export const Button = styled.button`
  border-radius: 30px;
  border: 1px solid ${theme.colors.borderColor};
  padding: 12px 24px;
  max-width: 530px;
  height: 48px;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  color: #252728;
  background: ${theme.colors.accent};
  transition: all 0.3s ease-in-out;

  @media ${theme.media.mobile} {
    height: 38px;
    min-width: 70px;
    padding: 6px 15px;
    font-size: 14px;
  }

  &:hover {
    filter: brightness(1.03);
    box-shadow: 0 10px 25px rgba(74, 130, 218, 0.3);
  }  
`