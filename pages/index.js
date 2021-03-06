import { useState } from "react";

import {
  HeroSection,
  ProjectsSection,
  AboutSection,
  ContactSection,
  Footer,
} from "../components";

const index = () => {
  const [isTrue, setIsTrue] = useState(false);

  const handleIsTrue = (inView) => setIsTrue(inView);

  return (
    <>
      <HeroSection />
      <ProjectsSection onIsTrue={handleIsTrue} isTrue={isTrue} />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default index;
