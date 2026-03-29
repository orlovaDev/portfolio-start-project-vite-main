import {ProjectMenu} from "./projectMenu/ProjectMenu.tsx";
import React from "react";
import {S} from "./Project_Styles.ts"

type ProjectPropsType = {
  title: string
  text: string
  src: string
  item: Array<string>
}

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
  return (
    <S.Project>
      <S.Image
        src={props.src}
        alt=""
      />
      <S.WrapperContent>
      <S.Title>{props.title}</S.Title>
      <ProjectMenu menuItems={props.item} />
      <S.Text>{props.text}</S.Text>
      </S.WrapperContent>
    </S.Project>
  );
};





