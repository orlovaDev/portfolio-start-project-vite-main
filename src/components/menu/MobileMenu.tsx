import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme.ts";

type MenuItemPropsType = {
  title: string
  href: string
}

export const MobileMenu = (props: { menuItems: Array<MenuItemPropsType> }) => {
  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={true}>
       <span>
       </span>
      </BurgerButton>
      <MobileMenuPopup isOpen={true}>
        <ul>
          {props.menuItems.map((item, index) => (
            <StyledItem key={index}>
              <Link href={`#${item.href}`}>{item.title}</Link>
            </StyledItem>
          ))}
        </ul>
      </MobileMenuPopup>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav`
  display: none;
  @media ${theme.media.tablet} {
    display: block;
  }
`
const MobileMenuPopup = styled.div<{isOpen: boolean}>`
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }
  
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: rgba(24, 31, 50, 0.98);
  display: none;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`

const BurgerButton = styled.button<{isOpen: boolean}>`
  position: fixed;
  top: 24px;
  right: 24px;
  width: 40px;
  height: 40px;
  z-index: 99999;
  cursor: pointer;
  
  span {
    display: block;
    width: 36px;
    height: 3px;
    background: ${theme.colors.accent};
    position: absolute;
    left: 5px;
    bottom: 20px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background: rgba(255, 255, 255, 0);
    `}
    
    &::before {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background: ${theme.colors.accent};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      content: '';
      display: block;
      width: 25px;
      height: 2px;
      background: ${theme.colors.accent};
      position: absolute;
      right: 0;
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        width: 36px;
        transform: rotate(45deg) translateY(0);
      `}
    }
  }
`

const StyledItem = styled.li`
  transition: all 0.3s ease-in-out;

  &:last-child a {
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 30px;
    padding: 10px 20px; 
    min-width: 80px;
    height: 45px;
    background: ${theme.colors.accent};
    color: ${theme.colors.buttonText};
    
    &:hover {
      box-shadow: 0 10px 20px rgba(74, 130, 218, 0.3);
    }
    
    &::after {
      display: none;
    }
    border-bottom: none;
  }
`

const Link = styled.a`
  font-weight: 500;
  font-size: 16px;
  color: ${theme.colors.font};
  text-decoration: none;
  position: relative;
  padding: 5px 0; 

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px; 
    border-radius: 5px;
    background: ${theme.colors.accent};
    transition: width 0.3s ease-out;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`



