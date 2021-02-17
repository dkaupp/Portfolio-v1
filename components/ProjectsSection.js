import React from "react";
import styled, { css } from "styled-components";
import { useInView } from "react-intersection-observer";

import { ProjectDescription, Project, ProjectMobile } from ".";
import { mediaQueries } from "../styles/mediaQueries";

const ProjectsSection = () => {
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

  const projects = [
    {
      id: 1,
      heading: "Pass It On",
      description:
        "Mobile app for classified ad posting. The front end was created using React Native, Expo; and the back end with Node, Express and Mongoose.",
      badges: ["mongodb", "react native", "nodejs"],
      hrefGit: "https://github.com/dkaupp/PassItOn",
      hrefWeb: "https://expo.io/@arthk/projects/PassItOn",
      ref: ref1,
      inView: inView1,
      source: "/project1.png",
      sourcemobile: "/project1-mobile.png",
      altText: "shows a phone with the pass it on project image on it",
      animationValue: "translateX(50vw)",
      direction: "",
    },
    {
      id: 2,
      heading: "Bug Logger App",
      description:
        "Bug logger app , with role base login . The front end was created using React/Redux; and back end with Node, Express and Mongoose.",
      badges: ["react", "mongodb", "redux", "nodejs"],
      hrefGit: "https://github.com/dkaupp/logger-redux",
      hrefWeb: "https://it-logger-front-end.herokuapp.com/",
      ref: ref2,
      inView: inView2,
      source: "/project2.png",
      sourcemobile: "/project2-mobile.png",
      altText: "shows a labtop with the bug logger app project image on it",
      animationValue: "translateX(-50vw)",
      direction: "left",
    },
    {
      id: 3,
      heading: "Portfolio",
      description:
        "This website was created as my portfolio. I designed it using Figma; then built it with Next and NodeJs",
      badges: ["figma", "next", "nodejs"],
      hrefGit: "https://github.com/dkaupp/Portfolio-v1",
      hrefWeb: "",
      ref: ref3,
      inView: inView3,
      source: "/project3.png",
      sourcemobile: "/project3-mobile.png",
      altText: "shows a labtop with the porfolio website project image on it",
      animationValue: "translateX(50vw)",
      direction: "",
    },
  ];

  return (
    <ProjectsSectionContainer>
      <ProjectsContainer id="work">
        {projects.map((project) => (
          <ProjectContainer
            ref={project.ref}
            inView={project.inView}
            animationValue={project.animationValue}
            key={project.id}
            direction={project.direction}
          >
            <ProjectMobile
              source={project.sourcemobile}
              altText={project.altText}
            />
            <ProjectDescription
              heading={project.heading}
              description={project.description}
              badges={project.badges}
              hrefGit={project.hrefGit}
              hrefWeb={project.hrefWeb}
              direction={project.direction}
            />
            <Project source={project.source} altText={project.altText} />
          </ProjectContainer>
        ))}
      </ProjectsContainer>
    </ProjectsSectionContainer>
  );
};

const ProjectsSectionContainer = styled.section`
  padding: 3rem 3rem 0 3rem;
  background-color: black;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mediaQueries("aboutMedia")`
     padding: 3rem 2rem 0 2rem
  `}
  ${mediaQueries("aboutMediaS")`
     padding: 3rem 1rem 0 1rem
  `}
   ${mediaQueries("mobileM")`
     padding : 2rem 0;
  `}
   ${mediaQueries("mobileM")`
     padding : 0;
  `}
`;
const ProjectsContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 128rem;
`;

const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  will-change: transform;
  width: 100%;
  transition: all 1s ease-out;
  transform: ${(props) => props.animationValue && props.animationValue};
  ${(props) =>
    props.direction === "left" &&
    css`
      flex-direction: row-reverse;
    `}
  ${(props) =>
    props.inView &&
    css`
      transform: translateX(0);
      opacity: 1;
    `};
  ${mediaQueries("aboutMediaS")`
    width: 100%;
    padding: 1rem;
  `}
`;

export default ProjectsSection;
