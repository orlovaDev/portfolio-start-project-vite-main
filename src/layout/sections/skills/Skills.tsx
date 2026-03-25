import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.ts";

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

export const Skills = (props: { id: string }) => {
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
`

