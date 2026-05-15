import HeroCard from "../components/reusable/HeroCard";
import CurriculumModule from "../components/section/curriculum/CurriculumModule";
import CTA from "../components/section/homePage/CTA";
import FAQ from "../components/section/homePage/FAQ";
import Testimonial from "../components/section/homePage/Testimonial";

export default function Project() {
    return (
        <div>
            <HeroCard
                title="The Complete Roadmap to Becoming a Java Developer"
                rightTitle="Curriculum Overview"
                rightDescription="A step-by-step learning journey covering Java fundamentals, Spring Boot development, APIs, microservices, and real software projects."
            />
            <CurriculumModule/>
            <Testimonial/>
            <FAQ />
            <CTA />
        </div>
    );
}