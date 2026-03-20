import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {HeaderMenu} from "../../components/menu/HeaderMenu.tsx";


const items = [
  {title: "Home", href: "main"},
  {title: "Projects", href: "projects"},
  {title: "Skills", href: "skills"},
  {title: "Contact", href: "contacts"}
]

export const Header = (props: { id: string }) => {
  return (
    <StyledHeader id={props.id}>
      <Container>
        <FlexWrapper
          justify={"space-between"}
          align={"center"}
        >
          <Logo />
          <HeaderMenu menuItems={items} />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: rgba(1, 15, 35, 0.56);
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  backdrop-filter: blur(5px);
`