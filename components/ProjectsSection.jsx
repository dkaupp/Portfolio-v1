import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { ProjectDescription, Project } from "./";
import NavigationContext from "../context/navigation";
import { mediaQueries } from "../styles/mediaQueries";

const projects = [
  {
    id: 1,
    heading: "It Logger App",
    description:
      "Bug logger app , with role base login . The front end was created using React/Redux, and back end with Node , Express and Mongoose.",
    badges: ["mongodb", "react", "redux", "nodejs"],
  },
  {
    id: 2,
    heading: "Pass It On",
    description:
      "Bug logger app , with role base login . The front end was created using React/Redux, and back end with Node , Express and Mongoose.",
    badges: ["mongodb", "react", "redux", "nodejs"],
  },
  {
    id: 3,
    heading: "Blog App",
    description:
      "Bug logger app , with role base login . The front end was created using React/Redux, and back end with Node , Express and Mongoose.",
    badges: ["mongodb", "react", "redux", "nodejs"],
  },
];

const ProjectsSection = () => {
  const { navigationValue: value } = useContext(NavigationContext);

  const [ref1, inView1] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [ref2, inView2] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [ref3, inView3] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <ProjectsSectionContainer>
      <ProjectsContainer id="work">
        <ProjectContainer1 ref={ref1} inView1={inView1} value={value}>
          <ProjectDescription
            heading={projects[0].heading}
            description={projects[0].description}
            badges={projects[0].badges}
          />
          <Project source="/project1.png" />
          <ProjectMobile src="/project1-mobile.png" />
        </ProjectContainer1>
        <ProjectContainer2 ref={ref2} inView2={inView2} value={value}>
          <Project source="/project2.png" />
          <ProjectMobile src="/project2-mobile.png" />
          <ProjectDescription
            direction={"left"}
            heading={projects[1].heading}
            description={projects[1].description}
            badges={projects[1].badges}
          />
        </ProjectContainer2>
        <ProjectContainer3 ref={ref3} inView3={inView3} value={value}>
          <ProjectDescription
            heading={projects[2].heading}
            description={projects[2].description}
            badges={projects[2].badges}
          />
          <Project source="/project3-svg.svg" />
          <ProjectMobile src="/project3-mobile.png" />
        </ProjectContainer3>
      </ProjectsContainer>
    </ProjectsSectionContainer>
  );
};

const ProjectMobile = styled.img`
  width: 100%;
  padding-top: 2rem;
  display: none;
  /* max-width: 60rem; */

  ${mediaQueries("aboutMediaS")`
    display:block;
  `}
`;

const ProjectsSectionContainer = styled(motion.section)`
  padding: 3rem 3rem 0 3rem;
  background-color: black;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mediaQueries("aboutMediaS")`
     padding: 3rem 1rem 0 1rem
  `}
`;
const ProjectsContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 128rem;
`;

const ProjectContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  will-change: transform;
`;

const ProjectContainer1 = styled(ProjectContainer)`
  transform: translateX(50vw);
  ${({ value }) =>
    value !== "about" || value !== "contact"
      ? css`
          transition: all 1s ease-out;
        `
      : css`
          transition: 0s;
        `};
  ${(props) =>
    props.inView1 &&
    css`
      transform: translateX(0);
      opacity: 1;
    `};
  ${mediaQueries("aboutMediaS")`
    width: 100%;
  `}
`;

const ProjectContainer2 = styled(ProjectContainer)`
  transform: translateX(-50vw);
  ${({ value }) =>
    value !== "about" || value === "contact"
      ? css`
          transition: all 1s ease-out;
        `
      : css`
          transition: 0s;
        `};
  ${(props) =>
    props.inView2 &&
    css`
      transform: translateX(0);
      opacity: 1;
    `};
  ${mediaQueries("aboutMediaS")`
    width: 100%;
    padding: 1rem;
  `}
`;

const ProjectContainer3 = styled(ProjectContainer)`
  transform: translateX(50vw);
  ${({ value }) =>
    value !== "about" || value !== "contact"
      ? css`
          transition: all 1s ease-out;
        `
      : css`
          transition: 0s;
        `};
  ${(props) =>
    props.inView3 &&
    css`
      transform: translateX(0);
      opacity: 1;
    `};
  ${mediaQueries("aboutMediaS")`
    width: 100%;
    padding: .5rem;
  `}
`;

export default ProjectsSection;
