import React from "react";
import {S} from "./ProjectMenu_Styles.ts";

export const ProjectMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
  return (
    <S.ProjectMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return <li key={index}>
            <S.Tech>{item}</S.Tech>
          </li>
        })}
      </ul>
    </S.ProjectMenu>
  );
};

