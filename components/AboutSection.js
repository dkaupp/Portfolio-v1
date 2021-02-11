import React from "react";
import styled, { css } from "styled-components";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

import { Para, Heading3 } from "../styles/typography";
import { mediaQueries } from "../styles/mediaQueries.js";
import Badge from "./Badge";

const AboutSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <AboutSectionContainer ref={ref} id="about">
      <AboutContainer inView={inView}>
        <Container>
          <AboutTextContainer>
            <AboutH3>What I do : </AboutH3>
            <AboutSectionPara>
              I'm a full stack web developer and use different technologies to
              create responsive, powerful and fully custom
              websites/applications.
            </AboutSectionPara>
            <AboutH32>Back End:</AboutH32>
            <StyledListContainer>
              <Badge name={"nodejs"} />
              <Badge name={"express"} />
              <Badge name={"mongodb"} />
            </StyledListContainer>
            <AboutH32>Front End:</AboutH32>
            <StyledListContainer>
              <Badge name={"react"} />
              <Badge name={"redux"} />
              <Badge name={"figma"} />
              <Badge name={"webflow"} />
              <Badge name={"bootstrap"} />
            </StyledListContainer>
          </AboutTextContainer>
          <AboutImageContainer>
            <AboutImg
              src="/about.svg"
              alt="about section image"
              width={1280}
              height={952}
              layout="responsive"
            />
          </AboutImageContainer>
          <AboutImageMobileContainer>
            <AboutImgMobile
              src="/about-mobile.svg"
              alt="about section image"
              width={650}
              height={1550}
              layout="responsive"
            />
          </AboutImageMobileContainer>
        </Container>
      </AboutContainer>
    </AboutSectionContainer>
  );
};

const AboutImageMobileContainer = styled.div`
  width: 100%;
  display: none;
  ${mediaQueries("aboutMediaS")`
    display:block;
  `}
`;

const AboutImageContainer = styled.div`
  width: 100%;
  ${mediaQueries("aboutMediaS")`
    display:none;
  `}
`;

const AboutSectionContainer = styled.section`
  background-color: black;
  padding: 3rem 3rem 3rem 3rem;

  ${mediaQueries("aboutMedia")`
    padding : 3rem 2rem;
  `}
  ${mediaQueries("tabletL")`
    padding : 3rem 1.5rem;
  `}

  ${mediaQueries("aboutMediaS")`
    padding : 3rem 2rem;
  `};

  ${mediaQueries("mobileM")`
     padding : 2rem 1rem;
  `}
  ${mediaQueries("mobileR")`
     padding : 2rem .5rem;
  `}
`;
const AboutImg = styled(Image)``;

const AboutImgMobile = styled(Image)``;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  will-change: transform;
  opacity: 0;
  transform: translateY(20rem);
  ${({ value }) =>
    value !== "contact"
      ? css`
          transition: all 1s ease-out;
        `
      : css`
          transition: 0s;
        `}
  ${(props) =>
    props.inView &&
    css`
      transform: translateY(0rem);
      opacity: 1;
    `}
    ${mediaQueries("aboutMediaS")`
     position: relative;
    //  transition : opacity .5s ease;
    margin-top: 3rem;
  `}
`;

const AboutTextContainer = styled.div`
  max-width: 50rem;
  color: white;
  margin-left: 3rem;
  width: 100%;
  margin-top: 3rem;
  position: absolute;

  ${mediaQueries("aboutMedia")`

    margin-left: 2rem;
  `};
  ${mediaQueries("aboutPhoto")`

  max-width: 45rem;
  `};

  ${mediaQueries("tabletL")`

    max-width: 45rem;
  `};

  ${mediaQueries("aboutMediaS")`
     max-width: 90%;
     margin-left: 0;
     top: 34%;
     
  `}
  ${mediaQueries("mobileM")`
     max-width: 90%;
     top: 33%;
  `}
  ${mediaQueries("mobileR")`
     max-width: 90%;
     top: 31%;
  `}
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 128rem;
  width: 100%;

  ${mediaQueries("aboutMediaS")`
    justify-content: center;
  `};
`;
const AboutH3 = styled(Heading3)`
  ${mediaQueries("desktopS")`
    font-size: 2.3rem;
  `};

  ${mediaQueries("aboutMedia")`
    font-size: 2rem;
  `};
`;
const AboutH32 = styled(AboutH3)`
  margin-top: 0.5rem;
  ${mediaQueries("aboutMedia")`
    margin-top: .5rem;
  `};
  ${mediaQueries("mobileM")`
    margin-top: .5rem;
  `};
`;

const AboutSectionPara = styled(Para)`
  ${mediaQueries("desktopS")`
    font-size: 1.8rem;
    letter-spacing: 1.2px;
    line-height: 1.4;
  `};
  ${mediaQueries("aboutMedia")`
    font-size: 1.6rem;
    letter-spacing: 1.2px;
    line-height: 1.2;
  `};
`;

const StyledListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default AboutSection;
