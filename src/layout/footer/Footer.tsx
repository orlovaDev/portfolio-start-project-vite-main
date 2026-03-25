import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Icon} from "../../components/icon/Icon.tsx";
import {Container} from "../../components/Container.ts";
import {theme} from "../../styles/Theme.ts";

const socialData = [
  { id: 'gmail', title: 'GMAIL', href: 'mailto:anastasiya.orlova1305@gmail.com' },
  { id: 'linkedin', title: 'LINKEDIN', href: '#' },
  { id: 'github', title: 'GITHUB', href: 'https://github.com/orlovaDev' },
]

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper
          direction={"column"}
          align={"center"}
          gap={"30px"}
        >
          <Name>Anastasiya</Name>
          <nav>
            <SocialList>
              {socialData.map(s => (
                <SocialItem key={s.id}>
                  <SocialLink href={s.href} aria-label={s.title} target="_blank">
                    <Icon iconId={s.id} width="38" height="38" viewBox="0 0 38 38" />
                  </SocialLink>
                  <span>{s.title}</span>
                </SocialItem>
              ))}
            </SocialList>
          </nav>
          <SmallText>WEB DEVELOPER 2026</SmallText>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  )
    ;
};
const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 100px 0 20px 0;
  
  @media ${theme.media.tablet} {
    padding: 50px 0 20px 0; 
  }
`
const Name = styled.span`
  font-weight: 400;
  font-size: 15px;
  color: ${theme.colors.font};
  text-transform: uppercase;

  @media ${theme.media.mobile} {
    font-size: 13px;
  }
`

const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: clamp(30px, 10vw, 75px);
`

const SocialItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  
  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 93%;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    text-align: center;
    color: ${theme.colors.font};

    @media ${theme.media.mobile} {
      font-size: 10px;
    }
  }
`
const SocialLink = styled.a`
  max-width: 70px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
    filter: brightness(1.1);
  }

  &:active {
    transform: translateY(-1px) scale(0.98);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`

const SmallText = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.8;
  letter-spacing: 0.04em;
  text-align: center;
  color: ${theme.colors.font};
  
  @media ${theme.media.mobile} {
    font-size: 9px;
  }
`