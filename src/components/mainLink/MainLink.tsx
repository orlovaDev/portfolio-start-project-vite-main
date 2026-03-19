import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

export const MainLink = () => {
  return (
    <StyledLink href="#contacts">
      Contact Me
    </StyledLink>
  );
};

const StyledLink = styled.a`
  border-radius: 30px;  //6px
  padding: 10px;
  min-width: 70px;
  height: 45px;
  text-align: center;
  background: ${theme.colors.accent};
  color: ${theme.colors.buttonText};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  border: ${theme.colors.borderColor};
  transition: all 0.3s ease-in-out;

  &:hover {
    filter: brightness(1.03);
    box-shadow: 0 10px 20px rgba(74, 130, 218, 0.3);
    //transform: translateY(-1px);
  }
`