import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; {new Date().getFullYear()}</FooterText>)
    </FooterContainer>
  );
};

const FooterContainer = styled.section`
  background-color: black;
  padding: 0 3rem;
`;

const FooterText = styled.h3`
  color: white;
  font-size: 1.8rem;
`;

export default Footer;
