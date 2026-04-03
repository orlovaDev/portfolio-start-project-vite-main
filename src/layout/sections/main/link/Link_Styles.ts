import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";
import {Link} from "react-scroll";

const MainLink = styled(Link)`
  border-radius: 30px; 
  padding: 10px 20px;
  min-width: 80px;
  height: 45px;
  text-align: center;
  border: 1px solid ${theme.colors.borderColor};
  background: ${theme.colors.accent};
  color: ${theme.colors.buttonText};
  font-weight: 500;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  @media ${theme.media.mobile} {
    height: 38px;     
    min-width: 70px;   
    padding: 6px 15px;
    font-size: 14px;  
  }

  &:hover {
    filter: brightness(1.03);
    box-shadow: 0 10px 20px rgba(74, 130, 218, 0.3);
  }
`
export const S = {
  MainLink,
}