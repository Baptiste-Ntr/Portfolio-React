import IntroduceSection from "./IntroduceSection";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import ServicesSection from "./ServicesSection";
import SkillSection from "./SkillSection";
import ProjectSection from "./ProjectSection";

// import {Link, Element} from 'react-scroll'

export default function SectionsContainer() {

    console.log('test')

    return (
        <div className="Sections_Container">
            {/*<Link to="Introduce_Section" smooth={true} duration={500} className="Link_To_Section" />*/}
            {/*<Link to="About_Section" smooth={true} duration={500} className="Link_To_Section" />*/}
            {/*<Link to="Experience_Section" smooth={true} duration={500} className="Link_To_Section" />*/}
            {/*<Link to="Services_Section" smooth={true} duration={500} className="Link_To_Section" />*/}
            {/*<Link to="Skill_Section" smooth={true} duration={500} className="Link_To_Section" />*/}
            {/*<Link to="Project_Section" smooth={true} duration={500} className="Link_To_Section" />*/}

            {/*<Element>*/}
            {/*    <IntroduceSection />*/}
            {/*</Element>*/}
            {/*<Element>*/}
            {/*    <AboutSection />*/}
            {/*</Element>*/}
            {/*<Element>*/}
            {/*    <ExperienceSection />*/}
            {/*</Element>*/}
            {/*<Element>*/}
            {/*    <ServicesSection />*/}
            {/*</Element>*/}
            {/*<Element>*/}
            {/*    <SkillSection />*/}
            {/*</Element>*/}
            {/*<Element>*/}
            {/*    <ProjectSection />*/}
            {/*</Element>*/}
            <IntroduceSection />
            <AboutSection />
            <ExperienceSection />
            <ServicesSection />
            <SkillSection />
            <ProjectSection />
        </div>
    )
}