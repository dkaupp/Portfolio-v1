import React from "react";
import styled, { css } from "styled-components";

import { Heading3, Para } from "../styles/typography";
import Badge from "./Badge";
import { mediaQueries } from "../styles/mediaQueries.js";

import theme from "../styles/theme";

const ProjectDescription = ({ heading, description, direction, badges }) => {
  return (
    <DescriptionContainer direction={direction}>
      <TextContainer>
        <ProjectH3>{heading}</ProjectH3>
        <BadgesContainer direction={direction}>
          {badges &&
            badges.map((badge, i) => (
              <Badge name={badge} direction={direction} key={i} />
            ))}
        </BadgesContainer>
        <ProjectPara>{description}</ProjectPara>
      </TextContainer>
      <ButtonsContainer direction={direction}>
        <ButtonContainerGit>
          <StyledGitIcon
            width="41"
            height="35"
            viewBox="0 0 41 35"
            fill="transparent"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="git-icon">
              <g id="Vector">
                <mask id="path-1-inside-1" fill="yellow">
                  <path d="M27.5994 20.2775C28.3811 20.2775 29.0352 20.6628 29.5935 21.4335C30.1519 22.2041 30.4391 23.1514 30.4391 24.2913C30.4391 25.4312 30.1519 26.3784 29.5935 27.1491C29.0192 27.9197 28.3651 28.305 27.5994 28.305C26.7858 28.305 26.0838 27.9197 25.5095 27.1491C24.9511 26.3784 24.664 25.4151 24.664 24.2913C24.664 23.1674 24.9352 22.2041 25.5095 21.4335C26.0679 20.6628 26.7858 20.2775 27.5994 20.2775ZM37.634 9.82569C39.8196 12.2018 40.9204 15.1078 40.9204 18.4954C40.9204 20.695 40.6651 22.6697 40.1706 24.4358C39.6601 26.1858 39.0219 27.6307 38.2562 28.7225C37.4745 29.8303 36.5492 30.7936 35.4165 31.6284C34.2838 32.4794 33.2468 33.0734 32.3056 33.4587C31.3644 33.844 30.2795 34.1491 29.0671 34.3578C27.8546 34.5665 26.9453 34.695 26.3072 34.711C25.7009 34.7431 25.0309 34.7592 24.313 34.7592C24.1535 34.7592 23.611 34.7752 22.7177 34.8073C21.8402 34.8394 21.0904 34.8555 20.5002 34.8555C19.9099 34.8555 19.1601 34.8394 18.2826 34.8073C17.3893 34.7752 16.8468 34.7592 16.6873 34.7592C15.9694 34.7592 15.2994 34.7592 14.6931 34.711C14.055 34.6789 13.1457 34.5665 11.9332 34.3578C10.7048 34.1491 9.63595 33.8601 8.67875 33.4587C7.7375 33.0734 6.70054 32.4633 5.56785 31.6284C4.43517 30.7936 3.49393 29.8303 2.72817 28.7225C1.96241 27.6307 1.32428 26.1858 0.813771 24.4358C0.319218 22.6697 0.0639648 20.695 0.0639648 18.4954C0.0639648 15.1078 1.16474 12.2018 3.35035 9.82569C3.11105 9.7133 3.09509 8.52523 3.31844 6.26147C3.50988 3.99771 3.98848 1.91055 4.77019 0C7.4982 0.288991 10.8644 1.84633 14.8846 4.63991C16.2406 4.2867 18.1072 4.09404 20.4842 4.09404C22.9729 4.09404 24.8395 4.27064 26.0838 4.63991C27.9184 3.38761 29.6733 2.37615 31.3484 1.58945C33.0554 0.818806 34.2679 0.369267 35.0496 0.256882L36.1982 0C36.9799 1.91055 37.4585 3.99771 37.65 6.26147C37.8893 8.50917 37.8733 9.69725 37.634 9.82569ZM20.5959 32.7844C25.5095 32.7844 29.2107 32.1904 31.7313 31.0023C34.2359 29.8142 35.5122 27.3578 35.5122 23.6651C35.5122 21.5298 34.7146 19.7317 33.1033 18.3028C32.2737 17.5161 31.3165 17.0505 30.1998 16.8739C29.1149 16.6972 27.4398 16.6972 25.1904 16.8739C22.941 17.0505 21.4095 17.1307 20.5799 17.1307C19.4632 17.1307 18.2348 17.0665 16.7192 16.9541C15.2037 16.8417 14.0072 16.7615 13.1616 16.7294C12.3002 16.6972 11.3749 16.8096 10.3698 17.0344C9.34879 17.2752 8.53517 17.6927 7.88108 18.2867C6.34957 19.6514 5.58381 21.4495 5.58381 23.6491C5.58381 27.3417 6.82817 29.7982 9.31688 30.9702C11.8056 32.1583 15.4908 32.7523 20.4044 32.7523L20.5959 32.7844ZM13.4966 20.2775C14.2624 20.2775 14.9324 20.6628 15.4908 21.4335C16.0492 22.2041 16.3363 23.1514 16.3363 24.2913C16.3363 25.4312 16.0492 26.3784 15.4908 27.1491C14.9324 27.9197 14.2624 28.305 13.4966 28.305C12.6671 28.305 11.9651 27.9197 11.4068 27.1491C10.8484 26.3784 10.5612 25.4151 10.5612 24.2913C10.5612 23.1674 10.8484 22.2041 11.4068 21.4335C11.9651 20.6628 12.6671 20.2775 13.4966 20.2775Z" />
                </mask>
                <path
                  id="git-path1"
                  d="M27.5994 20.2775C28.3811 20.2775 29.0352 20.6628 29.5935 21.4335C30.1519 22.2041 30.4391 23.1514 30.4391 24.2913C30.4391 25.4312 30.1519 26.3784 29.5935 27.1491C29.0192 27.9197 28.3651 28.305 27.5994 28.305C26.7858 28.305 26.0838 27.9197 25.5095 27.1491C24.9511 26.3784 24.664 25.4151 24.664 24.2913C24.664 23.1674 24.9352 22.2041 25.5095 21.4335C26.0679 20.6628 26.7858 20.2775 27.5994 20.2775ZM37.634 9.82569C39.8196 12.2018 40.9204 15.1078 40.9204 18.4954C40.9204 20.695 40.6651 22.6697 40.1706 24.4358C39.6601 26.1858 39.0219 27.6307 38.2562 28.7225C37.4745 29.8303 36.5492 30.7936 35.4165 31.6284C34.2838 32.4794 33.2468 33.0734 32.3056 33.4587C31.3644 33.844 30.2795 34.1491 29.0671 34.3578C27.8546 34.5665 26.9453 34.695 26.3072 34.711C25.7009 34.7431 25.0309 34.7592 24.313 34.7592C24.1535 34.7592 23.611 34.7752 22.7177 34.8073C21.8402 34.8394 21.0904 34.8555 20.5002 34.8555C19.9099 34.8555 19.1601 34.8394 18.2826 34.8073C17.3893 34.7752 16.8468 34.7592 16.6873 34.7592C15.9694 34.7592 15.2994 34.7592 14.6931 34.711C14.055 34.6789 13.1457 34.5665 11.9332 34.3578C10.7048 34.1491 9.63595 33.8601 8.67875 33.4587C7.7375 33.0734 6.70054 32.4633 5.56785 31.6284C4.43517 30.7936 3.49393 29.8303 2.72817 28.7225C1.96241 27.6307 1.32428 26.1858 0.813771 24.4358C0.319218 22.6697 0.0639648 20.695 0.0639648 18.4954C0.0639648 15.1078 1.16474 12.2018 3.35035 9.82569C3.11105 9.7133 3.09509 8.52523 3.31844 6.26147C3.50988 3.99771 3.98848 1.91055 4.77019 0C7.4982 0.288991 10.8644 1.84633 14.8846 4.63991C16.2406 4.2867 18.1072 4.09404 20.4842 4.09404C22.9729 4.09404 24.8395 4.27064 26.0838 4.63991C27.9184 3.38761 29.6733 2.37615 31.3484 1.58945C33.0554 0.818806 34.2679 0.369267 35.0496 0.256882L36.1982 0C36.9799 1.91055 37.4585 3.99771 37.65 6.26147C37.8893 8.50917 37.8733 9.69725 37.634 9.82569ZM20.5959 32.7844C25.5095 32.7844 29.2107 32.1904 31.7313 31.0023C34.2359 29.8142 35.5122 27.3578 35.5122 23.6651C35.5122 21.5298 34.7146 19.7317 33.1033 18.3028C32.2737 17.5161 31.3165 17.0505 30.1998 16.8739C29.1149 16.6972 27.4398 16.6972 25.1904 16.8739C22.941 17.0505 21.4095 17.1307 20.5799 17.1307C19.4632 17.1307 18.2348 17.0665 16.7192 16.9541C15.2037 16.8417 14.0072 16.7615 13.1616 16.7294C12.3002 16.6972 11.3749 16.8096 10.3698 17.0344C9.34879 17.2752 8.53517 17.6927 7.88108 18.2867C6.34957 19.6514 5.58381 21.4495 5.58381 23.6491C5.58381 27.3417 6.82817 29.7982 9.31688 30.9702C11.8056 32.1583 15.4908 32.7523 20.4044 32.7523L20.5959 32.7844ZM13.4966 20.2775C14.2624 20.2775 14.9324 20.6628 15.4908 21.4335C16.0492 22.2041 16.3363 23.1514 16.3363 24.2913C16.3363 25.4312 16.0492 26.3784 15.4908 27.1491C14.9324 27.9197 14.2624 28.305 13.4966 28.305C12.6671 28.305 11.9651 27.9197 11.4068 27.1491C10.8484 26.3784 10.5612 25.4151 10.5612 24.2913C10.5612 23.1674 10.8484 22.2041 11.4068 21.4335C11.9651 20.6628 12.6671 20.2775 13.4966 20.2775Z"
                  stroke="white"
                  strokeWidth="4"
                  mask="url(#path-1-inside-1)"
                />
              </g>
            </g>
          </StyledGitIcon>
        </ButtonContainerGit>
        <ButtonContainerWeb>
          <StyledWebIcon
            id="web"
            width="43"
            height="35"
            viewBox="0 0 43 35"
            fill="transparent"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="web-icon">
              <g id="web-icon-vector">
                <path
                  id="path1"
                  d="M4.17612 8.59859C3.62384 8.59859 3.17612 9.04631 3.17612 9.59859C3.17612 10.1509 3.62384 10.5986 4.17612 10.5986H16.8352C17.3875 10.5986 17.8352 10.1509 17.8352 9.59859C17.8352 9.04631 17.3875 8.59859 16.8352 8.59859H4.17612Z"
                  fill="white"
                />
                <path
                  id="path2"
                  d="M3.17612 14.5282C3.17612 13.9759 3.62384 13.5282 4.17612 13.5282H16.8352C17.3875 13.5282 17.8352 13.9759 17.8352 14.5282C17.8352 15.0805 17.3875 15.5282 16.8352 15.5282H4.17612C3.62384 15.5282 3.17612 15.0805 3.17612 14.5282Z"
                  fill="white"
                />
                <path
                  id="path3"
                  d="M4.17612 18.4577C3.62384 18.4577 3.17612 18.9055 3.17612 19.4577C3.17612 20.01 3.62384 20.4577 4.17612 20.4577H16.8352C17.3875 20.4577 17.8352 20.01 17.8352 19.4577C17.8352 18.9055 17.3875 18.4577 16.8352 18.4577H4.17612Z"
                  fill="white"
                />
                <path
                  id="path4"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M30.0269 25.6337L30.0076 25.6335L29.9564 25.6338L29.929 25.6338C24.3292 25.6338 19.7898 21.0542 19.7898 15.4049C19.7898 9.75568 24.3292 5.17606 29.929 5.17606L29.9733 5.17615L30.0076 5.17636C30.0221 5.17616 30.0366 5.17606 30.0511 5.17606C30.1019 5.17606 30.1526 5.17728 30.203 5.17972C35.6761 5.32624 40.0682 9.84813 40.0682 15.4049C40.0682 20.9617 35.6761 25.4836 30.203 25.6301C30.1526 25.6326 30.1019 25.6338 30.0511 25.6338L30.0269 25.6337ZM25.0722 20.1515C25.3405 21.0824 25.6854 21.9288 26.0915 22.663C24.9726 22.0571 24.0089 21.1944 23.279 20.1515H25.0722ZM33.4393 18.1515H26.663C26.5406 17.4477 26.4628 16.6964 26.4393 15.9091H33.663C33.6395 16.6964 33.5616 17.4477 33.4393 18.1515ZM32.2717 21.6749C32.5178 21.2269 32.7415 20.7158 32.9342 20.1515H27.1681C27.3608 20.7158 27.5845 21.2269 27.8306 21.6749C28.6782 23.2177 29.5307 23.6173 30.0203 23.6333C30.0517 23.6329 30.083 23.6324 30.1143 23.6317C30.6085 23.5994 31.4425 23.1843 32.2717 21.6749ZM24.0952 9.66667C24.6773 9.06224 25.3504 8.54822 26.0915 8.1469C25.8348 8.611 25.6026 9.11992 25.3987 9.66667H24.0952ZM27.8306 9.135C27.738 9.30348 27.6487 9.48088 27.5629 9.66667H32.5394C32.4536 9.48088 32.3643 9.30348 32.2717 9.135C31.4425 7.62554 30.6085 7.21042 30.1143 7.17815C30.083 7.17744 30.0517 7.17691 30.0203 7.17656C29.5307 7.19258 28.6782 7.59213 27.8306 9.135ZM33.2303 11.6667H26.8719C26.6992 12.3594 26.5709 13.1113 26.4987 13.9091H33.6036C33.5314 13.1113 33.403 12.3594 33.2303 11.6667ZM22.6755 11.6667H24.8189C24.6653 12.3786 24.5542 13.1296 24.4915 13.9091H21.9237C22.0676 13.1154 22.3241 12.3622 22.6755 11.6667ZM21.8048 15.9091H24.4385C24.4591 16.6822 24.5269 17.4328 24.6367 18.1515H22.2536C22.0061 17.4441 21.8514 16.6917 21.8048 15.9091ZM35.4656 18.1515C35.5754 17.4328 35.6431 16.6822 35.6638 15.9091H38.0532C38.0065 16.6917 37.8519 17.4441 37.6043 18.1515H35.4656ZM36.579 20.1515H35.0301C34.7862 20.9977 34.479 21.7741 34.1201 22.4598C35.0888 21.8705 35.9271 21.0828 36.579 20.1515ZM35.2834 11.6667C35.437 12.3786 35.5481 13.1296 35.6108 13.9091H37.9343C37.7903 13.1154 37.5338 12.3622 37.1824 11.6667H35.2834ZM35.7628 9.66667H34.7036C34.5291 9.19861 34.3337 8.75828 34.1201 8.35007C34.7226 8.7166 35.2746 9.15985 35.7628 9.66667Z"
                  fill="white"
                />
                <path
                  id="path5"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 4C0 1.79086 1.79086 0 4 0H39C41.2091 0 43 1.79086 43 4V26.8099C43 29.019 41.2091 30.8099 39 30.8099H27.4091V33H31.4943C32.0466 33 32.4943 33.4477 32.4943 34C32.4943 34.5523 32.0466 35 31.4943 35H11.5057C10.9534 35 10.5057 34.5523 10.5057 34C10.5057 33.4477 10.9534 33 11.5057 33H17.3466V30.8099H4C1.79086 30.8099 0 29.019 0 26.8099V4ZM4 2H39C40.1046 2 41 2.89543 41 4V26.8099C41 27.9144 40.1046 28.8099 39 28.8099H4C2.89543 28.8099 2 27.9144 2 26.8099V4C2 2.89543 2.89543 2 4 2ZM19.3466 33H25.4091V30.8099H19.3466V33Z"
                  fill="white"
                />
              </g>
            </g>
          </StyledWebIcon>
        </ButtonContainerWeb>
      </ButtonsContainer>
    </DescriptionContainer>
  );
};

const ProjectH3 = styled(Heading3)`
  color: white;
  ${mediaQueries("desktopS")`
    font-size: 2.3rem;
  `};
  ${mediaQueries("aboutMedia")`
    font-size: 2rem;
  `};
`;
const TextContainer = styled.div`
  max-width: 50rem;
  width: 100%;
`;

const ProjectPara = styled(Para)`
  ${mediaQueries("desktopS")`
    font-size: 1.8rem;
    letter-spacing: 1.2px;
    line-height: 1.4;
  `}
  ${mediaQueries("aboutMedia")`
    font-size: 1.6rem;
    letter-spacing: 1.2px;
    line-height: 1.2;
  `};
`;

const DescriptionContainer = styled.div`
  max-width: 100%;

  ${(props) =>
    props.direction &&
    css`
      text-align: right;
      margin-left: 0;
      margin-right: 1rem;
    `};
  ${mediaQueries("aboutMediaS")`
       position : absolute;
       background-color : rgba(0, 0, 0, 0.62);
       padding: 1rem;
       margin-right: 1rem;
       margin-left: 1rem;
       text-align: left;
       
       width: 90%;
       bottom : 36.5%
       
  `}
  ${mediaQueries("mobileS")`
     bottom: 35%;
   `}
`;
const BadgesContainer = styled.div`
  display: flex;
  justify-content: ${(props) => (props.direction ? "flex-end" : "flex-start")};

  ${mediaQueries("aboutMediaS")`
   justify-content: flex-start;
  `}
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  justify-content: ${(props) => (props.direction ? "flex-end" : "flex-start")};

  ${mediaQueries("aboutMediaS")`
    justify-content: flex-start
  `}
`;
const StyledGitIcon = styled.svg`
  margin-right: 1rem;
  overflow: visible;
  width: 4rem;
  ${mediaQueries("desktopS")`
    width: 3.5rem;
   `};
`;
const StyledWebIcon = styled.svg`
  overflow: visible;
  width: 4rem;
  ${mediaQueries("desktopS")`
    width: 3.5rem;
   `};
`;

const ButtonContainerGit = styled.div`
  transition: scale 0.1s ease;
  &:hover {
    & #git-path1 {
      transform-origin: center;
      stroke: ${theme.colors.yellow};
      transform: scale(1.1);
    }
  }
`;
const ButtonContainerWeb = styled.div`
  transition: scale 0.1s ease;
  overflow: visible;
  &:hover {
    & #path1,
    & #path2,
    & #path3,
    & #path4,
    & #path5 {
      transform-origin: center;
      transform: scale(1.1);
      fill: ${theme.colors.yellow};
    }
  }
`;

export default ProjectDescription;
