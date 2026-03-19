import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

export const Slogan = () => {
  return (
    <StyledSlogan>
      <SloganTitle>I’m available for a exciting new project. Let’s
        Talk.</SloganTitle>
      <SloganText>You can send me a message here OR contact me on any social networks. We
        can grab a coffee and talk it over a phone.
      </SloganText>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 60px;
`

const SloganTitle = styled.h2`
  font-weight: 500;
  font-size: clamp(32px, 5vw, 50px);
  background: ${theme.colors.accent};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const SloganText = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.5;
  color: ${theme.colors.font};
`
