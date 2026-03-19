import styled from "styled-components";
import {ProjectMenu} from "../../../../components/menu/ProjectMenu.tsx";
import {theme} from "../../../../styles/Theme.ts";

type ProjectPropsType = {
  title: string
  text: string
  src: string
  item: Array<string>
}

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <Image
        src={props.src}
        alt=""
      />
      <WrapperContentProject>
      <Title>{props.title}</Title>
      <ProjectMenu menuItems={props.item} />
      <Text>{props.text}</Text>
      </WrapperContentProject>
    </StyledProject>
  );
};
const StyledProject = styled.article`
  background-color: ${theme.colors.secondaryBg};
  max-width: 525px;
  width: 100%;
  border-radius: 6px;
  min-height: 640px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    //transform: translateY(-2px);
    background-color: #1c243c;
    box-shadow: 0 10px 25px rgba(74, 130, 218, 0.3);
  }
`

const Image = styled.img`
  width: 100%;
  max-width: 525px;
  height: 390px;
  object-fit: cover;
  overflow: hidden;
  margin-bottom: 30px;
`
const WrapperContentProject = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  padding: 0 25px 
`

const Title = styled.h3`
  color: #e1e8ff;;
  font-weight: 600;
  font-size: 20px;
`


const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.04em;
  color: ${theme.colors.font};
`




