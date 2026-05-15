import HeroCard from "../components/reusable/HeroCard";
import FeatureGrid from "../components/section/about/FeatureGrid";
import TrainingJourney from "../components/section/about/TrainingJourney";
import LearningEnvironment from "../components/section/about/LearningEnvironment";
import Contact from "../components/section/homePage/Contact";
import FAQ from "../components/section/homePage/FAQ";
import Testimonial from "../components/section/homePage/Testimonial";

export default function About() {
    return (
        <div>
            <HeroCard
                title="A Training Academy Focused on Real Software Development"
                rightTitle="About The Academy"
                rightDescription="Java Professional Academy trains developers using practical learning, modern frameworks, and enterprise projects."
            />
            <FeatureGrid />
            <LearningEnvironment />
            <TrainingJourney />
            <Testimonial/>
            <FAQ />
            <Contact />
        </div>
    );
}
