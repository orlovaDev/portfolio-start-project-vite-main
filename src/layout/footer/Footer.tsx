import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {Icon} from "../../components/icon/Icon.tsx";
import {Container} from "../../components/Container.ts";
import React from "react";
import {S} from "./Footer_Styles.ts";

const socialData = [
  {id: 'gmail', title: 'GMAIL', href: 'mailto:anastasiya.orlova1305@gmail.com'},
  {id: 'linkedin', title: 'LINKEDIN', href: '#'},
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
                    target="_blank"
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
