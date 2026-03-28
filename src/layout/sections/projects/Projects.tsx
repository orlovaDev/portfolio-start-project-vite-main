import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Project} from "./project/Project.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import project1 from "./../../../assets/images/proj-1.webp";
import project2 from "./../../../assets/images/proj-2.webp";
import project3 from "./../../../assets/images/proj-3.webp";
import project4 from "./../../../assets/images/proj-4.webp";
import {Container} from "../../../components/Container.ts";
import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

const worksItemsOne = ["JAVASCRIPT", "REACT", "REDUX"]
const worksItemsTwo = ["JAVASCRIPT", "REACT NATIVE", "REDUX"]
const projectsData = [
  {
    title: "TITLE PROJECT",
    src: project1,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.v",
    tech: worksItemsOne
  },
  {
    title: "INSIGHTGRAM",
    src: project2,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    tech: worksItemsTwo
  },
  {
    title: "TITLE PROJECT",
    src: project3,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    tech: worksItemsOne
  },
  {
    title: "INSIGHTGRAM",
    src: project4,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    tech: worksItemsTwo
  }
]

export const Projects = (props: { id: string }) => {
  return (
    <StyledProjects id={props.id}>
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <FlexWrapper  wrap={"wrap"} gap={"40px"} justify={"center"} >
          {projectsData.map((p, index) => (
            <Project
              key={index}
              title={p.title}
              src={p.src}
              text={p.text}
              item={p.tech}
            />
          ))}
        </FlexWrapper>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  ${FlexWrapper} {
    @media ${theme.media.tablet} {
      gap: 20px;
    }
  }
`


