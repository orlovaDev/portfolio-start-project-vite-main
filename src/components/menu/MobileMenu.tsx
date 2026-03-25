import {useEffect, useState} from "react";
import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme.ts";

type MenuItemPropsType = {
  title: string
  href: string
}

export const MobileMenu = (props: { menuItems: Array<MenuItemPropsType> }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  // Блокировка скролла
  useEffect(() => {
    if (menuIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // отменяем блокировку скролла
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuIsOpen]);

  const onBurgerBtnClick = () => setMenuIsOpen(!menuIsOpen);
  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
       <span>
       </span>
      </BurgerButton>

      <MobileMenuPopup isOpen={menuIsOpen} onClick={() => setMenuIsOpen(false)}>
        <ul onClick={e => e.stopPropagation()}>
          {props.menuItems.map((item, index) => (
            <StyledItem key={index}>
              <Link href={`#${item.href}`} onClick={() => setMenuIsOpen(false)}>
                {item.title}
              </Link>
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
`;

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



