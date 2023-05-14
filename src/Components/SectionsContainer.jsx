import IntroduceSection from "./IntroduceSection";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import ServicesSection from "./ServicesSection";
import SkillSection from "./SkillSection";
import ProjectSection from "./ProjectSection";

export default function SectionsContainer() {
    return (
        <div className="Sections_Container">
            <IntroduceSection />
            <AboutSection />
            <ExperienceSection />
            <ServicesSection />
            <SkillSection />
            <ProjectSection />
        </div>
    )
}