import HeroSection from "./components/section/homePage/HeroSection";
import BuildingSkills from "./components/section/homePage/BuildingSkills";
import DeveloperJourney from "./components/section/homePage/DeveloperJourney";
import TechStack from "./components/section/homePage/TechStack";
import ProgramFeatures from "./components/section/homePage/ProgramFeatures";
import LearningProcess from "./components/section/homePage/LearningProcess";
import DeveloperTools from "./components/section/homePage/DeveloperTools";
import StudentProjects from "./components/section/homePage/StudentProjects";
import DeveloperSkills from "./components/section/homePage/DeveloperSkills";
import LearningEnvironment from "./components/section/homePage/LearningEnvironment";
import FAQ from "./components/section/homePage/FAQ";
import Contact from "./components/section/homePage/Contact";
import CTA from "./components/section/homePage/CTA";
import Testimonial from "./components/section/homePage/Testimonial";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BuildingSkills />
      <DeveloperJourney />
      <TechStack />
      <ProgramFeatures />
      <StudentProjects />
      <LearningProcess />
      <DeveloperTools />
      <DeveloperSkills />
      <LearningEnvironment />
      <Testimonial/>
      <FAQ />
      <Contact />
      <CTA />
    </div>
  );
}
