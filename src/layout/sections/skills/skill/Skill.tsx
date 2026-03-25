import {Icon} from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";

type SkillPropsType = {
  iconId: string
  title: string
}

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon
        iconId={props.iconId}
        // width={"120"}
        // height={"120"}
        viewBox={"0 0 120 120"}
      >
      </Icon>
      <SkillTitle>{props.title}</SkillTitle>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  max-width: 120px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  transition: transform 0.3s ease;

  svg {
    width: 120px;
    height: 120px;

    @media ${theme.media.mobile} {
      width: 80px;  
      height: 80px;
    }
  }
`

const SkillTitle = styled.h3`
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-align: center;
  color: ${theme.colors.font};

  @media ${theme.media.mobile} {
    font-size: 12px; 
  }
`