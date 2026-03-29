import {Logo} from "./logo/Logo.tsx";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu.tsx";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu.tsx";
import React from "react";
import {S} from './Header_Styles.ts'


const items = [
  {title: "Home", href: "main"},
  {title: "Projects", href: "projects"},
  {title: "Skills", href: "skills"},
  {title: "Contact", href: "contacts"}
]

export const Header: React.FC<{ id: string }> = (props: { id: string }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <S.Header id={props.id}>
      <Container>
        <FlexWrapper
          justify={"space-between"}
          align={"center"}
        >
          <Logo />
          {width < breakpoint ? <MobileMenu menuItems={items} />
                              : <DesktopMenu menuItems={items} /> }
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};

