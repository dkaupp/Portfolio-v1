import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { ProjectDescription, Project } from "./";

const ProjectsSection = () => {
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
      <ProjectsContainer>
        <ProjectContainer1
          ref={ref1}
          // variants={ProjectVatiants}
          // initial="hidden"
          // animate={inView1 ? "visible" : "hidden"}
          inView1={inView1}
        >
          <ProjectDescription
            heading={projects[0].heading}
            description={projects[0].description}
            badges={projects[0].badges}
          />
          <Project source="../static/project1.png" />
        </ProjectContainer1>
        <ProjectContainer2
          ref={ref2}
          // variants={ProjectVatiants2}
          // initial="hidden"
          // animate={inView2 ? "visible" : "hidden"}
          inView2={inView2}
        >
          <Project source="../static/project2.png" />
          <ProjectDescription
            direction={"left"}
            heading={projects[1].heading}
            description={projects[1].description}
            badges={projects[1].badges}
          />
        </ProjectContainer2>
        <ProjectContainer3
          ref={ref3}
          // variants={ProjectVatiants}
          // initial="hidden"
          // animate={inView3 ? "visible" : "hidden"}
          inView3={inView3}
        >
          <ProjectDescription
            heading={projects[2].heading}
            description={projects[2].description}
            badges={projects[2].badges}
          />
          <Project source="../static/project3-svg.svg" />
        </ProjectContainer3>
      </ProjectsContainer>
    </ProjectsSectionContainer>
  );
};

const ProjectsSectionContainer = styled(motion.section)`
  padding: 6rem 3rem 0 3rem;
  background-color: black;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
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
  transition: all 1s ease-out;
  transition-delay: 0.2s;
`;

const ProjectContainer1 = styled(ProjectContainer)`
  transform: translateX(50vw)
    ${(props) =>
      props.inView1 &&
      css`
        transform: translateX(0);
        opacity: 1;
      `};
`;

const ProjectContainer2 = styled(ProjectContainer)`
  transform: translateX(-50vw)
    ${(props) =>
      props.inView2 &&
      css`
        transform: translateX(0);
        opacity: 1;
      `};
`;

const ProjectContainer3 = styled(ProjectContainer)`
  transform: translateX(50vw)
    ${(props) =>
      props.inView3 &&
      css`
        transform: translateX(0);
        opacity: 1;
      `};
`;

// const ProjectVatiants = {
//   hidden: {
//     x: "50vw",
//     opacity: 0,
//     transition: {
//       duration: 1.5,
//       ease: "easeOut",
//     },
//   },
//   visible: {
//     opacity: 1,
//     x: "0rem",
//     transition: {
//       delay: 0.5,
//       duration: 1,
//       ease: "easeOut",
//     },
//   },
// };

// const ProjectVatiants2 = {
//   hidden: {
//     x: "-50vw",
//     opacity: 0,
//     transition: {
//       duration: 1.5,
//       ease: "easeOut",
//     },
//   },
//   visible: {
//     opacity: 1,
//     x: "0rem",
//     transition: {
//       delay: 0.5,
//       duration: 1,
//       ease: "easeOut",
//     },
//   },
// };

export default ProjectsSection;
