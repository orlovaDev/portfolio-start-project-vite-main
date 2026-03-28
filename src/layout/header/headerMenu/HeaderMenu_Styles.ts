import {theme} from "../../../styles/Theme.ts";
import styled, {css} from "styled-components";

//Menu

const MenuItem = styled.li`
  transition: all 0.3s ease-in-out;

  &:last-child a {
    border-radius: 30px;  
    padding: 10px 20px;
    min-width: 80px;
    height: 45px;
    text-align: center;
    border: 1px solid ${theme.colors.borderColor};
    background: ${theme.colors.accent};
    color: ${theme.colors.buttonText};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
  }

  &:last-child a:hover {
    filter: brightness(1.03);
    box-shadow: 0 10px 20px rgba(74, 130, 218, 0.3);
  }

  &:last-child a::after {
    background: none;
  }
`

const Link = styled.a`
  font-weight: 500;
  font-size: 16px;
  color: ${theme.colors.font};

  display: inline-block;
  text-decoration: none;
  border-bottom: 2px solid transparent;  // чтоб не прыгал текст 
  position: relative;
  padding-bottom: 2px; // Небольшой отступ, чтобы линия не вплотную к буквам

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 3px;
    border-radius: 20px;
    background: ${theme.colors.accent};
    transition: width 0.5s ease-out;
  }

  &:hover {
    filter: brightness(1.03);
    &::after {
      width: 100%;
    }
  }
`
// Mobile Menu

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: rgba(1, 15, 35, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  
  transform: translateY(-100%);
  transition: transform 0.4s ease-in-out;

  ${props => props.isOpen && css`
    transform: translateY(0);
  `}

  ul {
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
  }
`;

const BurgerButton = styled.button<{isOpen: boolean}>`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  z-index: 99999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background: ${theme.colors.accent};
    position: absolute;
    left: 2px;
    border-radius: 5px;
    transition: background 0.2s ease-in-out;

    ${props => props.isOpen && css`
      background: transparent;
    `}

    &::before, &::after {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      border-radius: 5px;
      background: ${theme.colors.accent};
      position: absolute;
      transition: transform 0.3s ease-in-out, width 0.3s;
    }

    &::before {
      transform: translateY(-10px);
      ${props => props.isOpen && css`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      width: 24px;
      right: 0;
      transform: translateY(10px);
      ${props => props.isOpen && css`
        width: 36px;
        transform: rotate(45deg) translateY(0);
      `}
    }
  }
`

// Desktop Menu

const DesktopMenu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
`

export const S = {
  MenuItem,
  Link,
  MobileMenuPopup,
  BurgerButton,
  DesktopMenu,
}