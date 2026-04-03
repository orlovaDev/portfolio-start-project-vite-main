import React from "react";
import {S} from './../HeaderMenu_Styles.ts'

const items = [
  {title: "Home", href: "main"},
  {title: "Projects", href: "projects"},
  {title: "Skills", href: "skills"},
  {title: "Contact", href: "contacts"}
]

type MenuPropsType = {
  closeMenu?: () => void;
}

export const Menu: React.FC<MenuPropsType> = (props) => {
  return (
    <ul>
      {items.map((item, index) => (
        <S.MenuItem key={index}>
          <S.NavLink
            activeClass="active"
            to={item.href}
            spy={true}
            smooth={true}
            delay={300}
            // duration={300}
            onClick={props.closeMenu}
          >{item.title}</S.NavLink>
        </S.MenuItem>
      ))}
    </ul>
  );
};

