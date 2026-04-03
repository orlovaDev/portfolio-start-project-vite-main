import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon.tsx';
import { animateScroll as scroll } from 'react-scroll';

export const GoTopBtn: React.FC = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    // Выносим функцию-обработчик отдельно
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };

    // Вешаем слушатель
    window.addEventListener('scroll', handleScroll);

    // ВАЖНО: Удаляем слушатель при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {showBtn && (
        <StyledGoTopBtn onClick={() => scroll.scrollToTop()}>
          <Icon iconId="gotop" width="15" height="15" viewBox="0 0 15 15" />
        </StyledGoTopBtn>
      )}
    </>
  );
};


const StyledGoTopBtn = styled.button`
  background-color: rgba(15, 66, 120, 0.2);
  padding: 8px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  border-radius: 20px;
  border: none; 
  cursor: pointer; 
  transition: .5s;

  &:hover {
    background-color: rgba(23, 57, 103, 0.4); /* Эффект при наведении */
  }
`;