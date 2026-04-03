import React, {useEffect, useState} from "react";
import {Menu} from "../menu/Menu.tsx";
import {S} from './../HeaderMenu_Styles.ts';

export const MobileMenu: React.FC = () => {
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

      <S.MobileMenuPopup isOpen={menuIsOpen}>
        <Menu closeMenu={() => setMenuIsOpen(false)}/>
      </S.MobileMenuPopup>
    </nav>
  );
};





