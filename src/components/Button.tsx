import styled from "styled-components";
import {theme} from "../styles/Theme.ts";


export const Button = styled.button`
  border-radius: 30px;
  border: ${theme.colors.borderColor};
  padding: 12px 20px;
  max-width: 530px;
  height: 48px;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  color: #252728;
  background: ${theme.colors.accent};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    filter: brightness(1.03);
    box-shadow: 0 10px 25px rgba(74, 130, 218, 0.3);
  
  }  //transform: translateY(-1px);
`