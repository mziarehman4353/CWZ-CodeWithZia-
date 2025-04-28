
"use client";
import LayoutWrapper from "@/app/components/General/LayoutWrapper";
import AboutIntro from "./components/AboutIntro";
import AboutTimeline from "./components/AboutTimeline";
import AboutTechStack from "./components/AboutTechStack";
import AboutValues from "./components/AboutValues";

const AboutPage = () => {
  return (
    <LayoutWrapper>
      {/* About Intro Section */}
      <AboutIntro />
    
      {/* About Values Section */}
      <br />
      <br />

      <AboutValues />
      <br />

      
      {/* About Timeline Section */}
      <AboutTimeline />
      <br/>
      
      {/* About Tech Stack Section */}
      <AboutTechStack />
      <br />
      
    </LayoutWrapper>
  );
};

export default AboutPage;
