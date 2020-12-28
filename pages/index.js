import { useState } from "react";

import HeroSection from "../components/HeroSection";
import HeadSection from "../components/HeadSection";
import ProjectsSection from "../components/ProjectsSection";
import AboutSection from "../components/AboutSection.jsx";
import ContactSection from "../components/ContactSection";

const index = () => {
  const [isTrue, setIsTrue] = useState(false);

  const handleIsTrue = (inView) => setIsTrue(inView);

  return (
    <>
      <HeroSection />
      {/* <HeadSection onIsTrue={handleIsTrue} isTrue={isTrue} /> */}
      <ProjectsSection onIsTrue={handleIsTrue} isTrue={isTrue} />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default index;
