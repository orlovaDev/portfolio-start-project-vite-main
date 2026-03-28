import React from "react";
import {S} from './../HeaderMenu_Styles.ts'

type MenuItemPropsType = {
  title: string
  href: string
}

export const Menu: React.FC<{menuItems: Array<MenuItemPropsType>}> = (props: { menuItems: Array<MenuItemPropsType> }) => {
  return (
    <ul>
      {props.menuItems.map((item, index) => (
        <S.MenuItem key={index}>
          <S.Link href={`#${item.href}`}>{item.title}</S.Link>
        </S.MenuItem>
      ))}
    </ul>
  );
};

