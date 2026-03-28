import React, {useEffect, useState} from "react";
import {Menu} from "../menu/Menu.tsx";
import {S} from './../HeaderMenu_Styles.ts';

type MenuItemPropsType = {
  title: string
  href: string
}

export const MobileMenu: React.FC<{menuItems: Array<MenuItemPropsType>}> = (props: { menuItems: Array<MenuItemPropsType> }) => {
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
    <nav>
      <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
       <span>
       </span>
      </S.BurgerButton>

      <S.MobileMenuPopup isOpen={menuIsOpen} onClick={() => setMenuIsOpen(false)}>
        <Menu menuItems={props.menuItems} />
      </S.MobileMenuPopup>
    </nav>
  );
};





