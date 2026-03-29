import {Icon} from "../../../../components/icon/Icon.tsx";
import {S} from "./Skill_Styles.ts";
import React from "react";

type SkillPropsType = {
  iconId: string
  title: string
}

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
  return (
    <S.Skill>
      <Icon
        iconId={props.iconId}
        // width={"120"}
        // height={"120"}
        viewBox={"0 0 120 120"}
      >
      </Icon>
      <S.Title>{props.title}</S.Title>
    </S.Skill>
  );
};

