import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";


export const ProjectMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledProjectMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return <li key={index}>
            <Tech>{item}</Tech>
          </li>
        })}
      </ul>
    </StyledProjectMenu>
  );
};

const StyledProjectMenu = styled.div`
  margin-bottom: 20px;
  width: 100%;
  
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 8px;
  }
`

const Tech = styled.span`
  display: flex; 
  align-items: center;
  justify-content: center;
  min-width: 80px;
  padding: 8px 16px;
  min-height: 28px;
  background: ${theme.colors.accent};
  color: ${theme.colors.buttonText};
  border-radius: 30px;
  border: 1px solid ${theme.colors.borderColor};
  font-weight: 500;
  font-size: 10px;
  line-height: 1;
  letter-spacing: 1px;
  text-transform: uppercase;
  white-space: nowrap; //Чтобы название не переносилось 
`