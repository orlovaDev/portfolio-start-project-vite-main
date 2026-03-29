import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";
import React from "react";

const skillsData = [
  { iconId: 'js', title: 'JAVASCRIPT'},
  { iconId: 'ts', title: 'TYPESCRIPT'},
  { iconId: 'mongo', title: 'MONGO DB'},
  { iconId: 'postgresql', title: 'POSTGREST'},
  { iconId: 'jest', title: 'JEST'},
  { iconId: 'express', title: 'EXPRESS JS'},
  { iconId: 'nestjs', title: 'NEST JS'},
  { iconId: 'docker', title: 'DOCKER'},
  { iconId: 'react', title: 'REACT JS'},
  { iconId: 'reactivate', title: 'REACT NATIVE'},
  { iconId: 'html', title: 'HTML'},
  { iconId: 'css', title: 'CSS'},
  { iconId: 'styledcomponents', title: 'STYLED COMPONENTS'},
  { iconId: 'redux', title: 'REDUX'},
  { iconId: 'git', title: 'GIT'}
]

export const Skills: React.FC<{ id: string }> = (props: { id: string }) => {
  return (
    <StyledSkills id={props.id}>
      <Container>
      <SectionTitle>Skills</SectionTitle>
      <FlexWrapper wrap={'wrap'} justify={'center'} gap={'80px'}>
        {skillsData.map((s, index) => (
          <Skill
            key={index}
            iconId={s.iconId}
            title={s.title}
          />
        ))}
      </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  ${FlexWrapper} {
    @media ${theme.media.tablet} {
      gap: 40px;
    }

    @media ${theme.media.mobile} {
      gap: 30px 20px; 
    }
  }
`

