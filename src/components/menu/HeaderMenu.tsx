import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

type MenuItemPropsType = {
  title: string
  href: string
}

export const HeaderMenu = (props: { menuItems: Array<MenuItemPropsType> }) => {
  return (
    <StyledHeaderMenu>
      <ul>
        {props.menuItems.map((item, index) => (
          <StyledHeaderItem key={index}>
            <Link href={`#${item.href}`}>{item.title}</Link>
          </StyledHeaderItem>
        ))}
      </ul>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`
  @media ${theme.media.tablet} {
    display: none; 
  }
  
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
`

const StyledHeaderItem = styled.li`
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




