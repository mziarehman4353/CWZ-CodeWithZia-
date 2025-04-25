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

      <AboutValues />

      
      {/* About Timeline Section */}
      <AboutTimeline />
      
      {/* About Tech Stack Section */}
      <AboutTechStack />
      
    </LayoutWrapper>
  );
};

export default AboutPage;
