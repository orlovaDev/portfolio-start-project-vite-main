import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";

export const About = (props: { id: string }) => {
  return (
    <StyledAbout id={props.id}>
      <Container>
          <SectionTitle>About me</SectionTitle>
          <AboutText>The long barrow was built on land previously inhabited in
            the
            Mesolithic period. It consisted of a sub-rectangular earthen
            tumulus,
            estimated to have been 15 metres (50 feet) in length, with a chamber
            built from sarsen megaliths on its eastern end. Both inhumed and
            cremated human remains were placed within this chamber during the
            Neolithic period, representing at least nine or ten
            individuals.</AboutText>
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  padding-top: 140px;
  
  @media ${theme.media.tablet} {
    padding-top: 30px;
  }
`

const AboutText = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  color: ${theme.colors.font};
  position: relative;
  padding-left: 25px;
  
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%; 
    width: 5px;
    background: ${theme.colors.accent};
    border-radius: 2px;
    transform: none; 
  }

  @media ${theme.media.tablet} {
    font-size: 16px;
    &::before {
      width: 3px; 
    }
  }

  @media ${theme.media.mobile} {
    text-align: justify;
    font-size: 14px;
    padding-left: 0; 
    &::before { 
      display: none; 
    }
  }
`;


