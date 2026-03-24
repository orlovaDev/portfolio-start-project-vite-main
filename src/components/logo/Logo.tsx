import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";

export const Logo = () => {
  return (
    <StyledLinkLogo href="#main" aria-label="Home">
      <Icon iconId={'logo'} width={'40'} height={'40'} viewBox={'0 0 40 40'}/>
    </StyledLinkLogo>
  );
};

const StyledLinkLogo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`




