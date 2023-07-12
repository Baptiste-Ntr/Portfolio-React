import SectionTitle from "./SectionTitle";
import {faMicrochip} from "@fortawesome/free-solid-svg-icons";
import SkillPart from "./SkillPart";
import {SiCss3, SiHtml5, SiJavascript, SiReact, SiNextdotjs, SiTypescript} from "react-icons/si";

export default function SkillSection() {
    return (
        <div className="Skill_Section">
            <SectionTitle label={"Skills"} SectionIcon={faMicrochip}/>
            <main>
                <h1><span className="color_yellow">Techno</span>logies</h1>
                <section>
                    <SkillPart title={'HTML'} technoIcon={<SiHtml5 size={70} color={'#f75421'}/>} />
                    <SkillPart title={'CSS'} technoIcon={<SiCss3 size={70} color={'#0091d5'}/>} />
                    <SkillPart title={'JS'} technoIcon={<SiJavascript size={70} color={'#efd81d'}/>} />
                    <SkillPart title={'TS'} technoIcon={<SiTypescript size={70} color={'#0076c6'}/>} />
                    <SkillPart title={'ReactJS'} technoIcon={<SiReact size={70} color={'#5ed3f3'}/>} />
                    <SkillPart title={'NextJS'} technoIcon={<SiNextdotjs size={70}/>} />
                </section>
            </main>
        </div>
    )
}