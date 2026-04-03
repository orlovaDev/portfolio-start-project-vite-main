import iconsSprite from '../../assets/images/icons-sprite.svg'
import React from "react";

type IconPropsType = {
  iconId: string
  width?: string
  height?: string
  viewBox?: string
}

export const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox={props.viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use href={`${iconsSprite}#${props.iconId}`} />
    </svg>
  );
};


