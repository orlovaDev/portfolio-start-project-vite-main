import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";


export const ProjectMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledProjectMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return <StyledHeaderItem key={index}>
            <Tech>{item}</Tech>
          </StyledHeaderItem>
        })}
      </ul>
    </StyledProjectMenu>
  );
};

const StyledProjectMenu = styled.div`
  margin-bottom: 20px;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 8px;
  }
`

const StyledHeaderItem = styled.li`

`

const Tech = styled.span`
  min-width: 105px;
  text-align: center;
  background: ${theme.colors.accent};
  color: ${theme.colors.buttonText};
  border-radius: 30px;
  border: ${theme.colors.borderColor};
  //border-bottom: 2px solid transparent;
  padding: 8px 16px;
  max-width: 120px;
  height: 30px;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: 1px;
  text-transform: uppercase;
`

