import HeroCard from "../components/reusable/HeroCard";
import Location from "../components/section/contact/Location";
import Contact from "../components/section/homePage/Contact";
import CTA from "../components/section/homePage/CTA";
import FAQ from "../components/section/homePage/FAQ";
import Testimonial from "../components/section/homePage/Testimonial";

export default function Project() {
    return (
        <div>
            <HeroCard
                title="Get in Touch with Java Professional Academy"
                rightTitle="Contact Us"
                rightDescription="Reach out to our team for training details, enrollment assistance, or partnership inquiries."
            />
            <Contact />
            <Location/>
            <FAQ />
            <CTA />
        </div>
    );
}