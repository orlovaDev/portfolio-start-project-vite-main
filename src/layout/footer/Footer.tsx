import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {Icon} from "../../components/icon/Icon.tsx";
import {Container} from "../../components/Container.ts";
import React from "react";
import {S} from "./Footer_Styles.ts";

const socialData = [
  {id: 'gmail', title: 'GMAIL', href: 'mailto:anastasiya.orlova1305@gmail.com'},
  {id: 'linkedin', title: 'LINKEDIN', href: 'https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B0%D1%81%D1%82%D0%B0%D1%81%D0%B8%D1%8F-%D0%BE%D1%80%D0%BB%D0%BE%D0%B2%D0%B0-677317391'},
  {id: 'github', title: 'GITHUB', href: 'https://github.com/orlovaDev'},
]

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <FlexWrapper
          direction={"column"}
          align={"center"}
          gap={"30px"}
        >
          <S.Name>Anastasiya</S.Name>
          <nav>
            <S.SocialList>
              {socialData.map(s => (
                <S.SocialItem key={s.id}>
                  <S.SocialLink
                    href={s.href}
                    aria-label={s.title}
                    target={s.id === 'gmail' ? '_self' : '_blank'}
                    rel="noreferrer"
                  >
                    <Icon
                      iconId={s.id}
                      width="38"
                      height="38"
                      viewBox="0 0 38 38"
                    />
                  </S.SocialLink>
                  <span>{s.title}</span>
                </S.SocialItem>
              ))}
            </S.SocialList>
          </nav>
          <S.SmallText>WEB DEVELOPER 2026</S.SmallText>
        </FlexWrapper>
      </Container>
    </S.Footer>
  );
};
