import styled from "styled-components";
import Image from "next/image";

const Logo = () => {
  return (
    <LogoContainer>
      <Image
        src="/newlogo.svg"
        height={150}
        width={650}
        layout="responsive"
        alt="logo reflects my firts initial and last name"
      />
    </LogoContainer>
  );
};

const StyledLogo = styled.svg`
  height: auto;
`;
const LogoContainer = styled.div`
  width: 100%;
  max-width: 150px;
`;

export default Logo;
