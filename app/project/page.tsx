import HeroCard from "../components/reusable/HeroCard";

import Contact from "../components/section/homePage/Contact";
import FAQ from "../components/section/homePage/FAQ";
import Testimonial from "../components/section/homePage/Testimonial";
import StudentProject from "../components/section/project/StudentProject";

export default function Project() {
    return (
        <div>
            <HeroCard
                title="Real Software Projects Built by Our Developers"
                rightTitle="Project Showcase"
                rightDescription="Explore real applications built by our developers including enterprise backend systems, microservices platforms, and full stack applications."
            />
            <StudentProject/>
            <Testimonial/>
            <FAQ />
            <Contact />
        </div>
    );
}