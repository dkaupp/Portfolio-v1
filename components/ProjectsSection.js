import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { ProjectDescription, Project, ProjectMobile } from ".";
import NavigationContext from "../context/navigation";
import { mediaQueries } from "../styles/mediaQueries";

const projects = [
  {
    id: 1,
    heading: "Pass It On",
    description:
      "Mobile app for classified ad posting. The front end was created using React Native, Expo; and the back end with Node, Express and Mongoose.",
    badges: ["mongodb", "react native", "nodejs"],
    hrefGit: "https://github.com/dkaupp/PassItOn",
    hrefWeb: "https://expo.io/@arthk/projects/PassItOn",
  },
  {
    id: 2,
    heading: "Bug Logger App",
    description:
      "Bug logger app , with role base login . The front end was created using React/Redux; and back end with Node, Express and Mongoose.",
    badges: ["react", "mongodb", "redux", "nodejs"],
    hrefGit: "https://github.com/dkaupp/logger-redux",
    hrefWeb: "https://it-logger-front-end.herokuapp.com/",
  },
  {
    id: 3,
    heading: "Portfolio",
    description:
      "This website was created as my portfolio. I designed it using Figma; then built it with Next and NodeJs",
    badges: ["figma", "next", "nodejs"],
    hrefGit: "https://github.com/dkaupp/Portfolio-v1",
    hrefWeb: "",
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
          <ProjectMobile
            source="/project1-mobile.png"
            altText="pass it on project"
          />
          <ProjectDescription
            heading={projects[0].heading}
            description={projects[0].description}
            badges={projects[0].badges}
            hrefGit={projects[0].hrefGit}
            hrefWeb={projects[0].hrefWeb}
          />
          <Project source="/project1.png" altText="pass it on project" />
        </ProjectContainer1>
        <ProjectContainer2 ref={ref2} inView2={inView2} value={value}>
          <Project source="/project2.png" altText="bug logger app project" />
          <ProjectMobile
            source="/project2-mobile.png"
            altText="bug logger app project"
          />
          <ProjectDescription
            direction={"left"}
            heading={projects[1].heading}
            description={projects[1].description}
            badges={projects[1].badges}
            hrefGit={projects[1].hrefGit}
            hrefWeb={projects[1].hrefWeb}
          />
        </ProjectContainer2>
        <ProjectContainer3 ref={ref3} inView3={inView3} value={value}>
          <ProjectMobile
            source="/project3-mobile.png"
            altText="porfolio website project"
          />
          <ProjectDescription
            heading={projects[2].heading}
            description={projects[2].description}
            badges={projects[2].badges}
            hrefGit={projects[2].hrefGit}
            hrefWeb={projects[2].hrefWeb}
          />
          <Project source="/project3.png" altText="porfolio website project" />
        </ProjectContainer3>
      </ProjectsContainer>
    </ProjectsSectionContainer>
  );
};

const ProjectsSectionContainer = styled(motion.section)`
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

const ProjectContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  will-change: transform;
  width: 100%;
`;

const ProjectContainer1 = styled(ProjectContainer)`
  transform: translateX(50rem);
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
    padding: 1rem;
  `}
`;

const ProjectContainer2 = styled(ProjectContainer)`
  transform: translateX(-50rem);
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

  ${mediaQueries("aboutMediaS")`
    padding: 1rem;
    width: 100%;
  `}
`;

const ProjectContainer3 = styled(ProjectContainer)`
  transform: translateX(50rem);
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
    padding: 1rem;
  `}
`;

export default ProjectsSection;
