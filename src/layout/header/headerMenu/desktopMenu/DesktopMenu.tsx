import React from "react";
import {Menu} from "../menu/Menu.tsx";
import {S} from './../HeaderMenu_Styles.ts';

type MenuItemPropsType = {
  title: string
  href: string
}

export const DesktopMenu: React.FC<{menuItems: Array<MenuItemPropsType>}> = (props: { menuItems: Array<MenuItemPropsType> }) => {
  return (
    <S.DesktopMenu>
      <Menu menuItems={props.menuItems} />
    </S.DesktopMenu>
  );
};







