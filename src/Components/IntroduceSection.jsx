import SectionTitle from "./SectionTitle";
import {faHouse} from "@fortawesome/free-solid-svg-icons";

export default function IntroduceSection() {
    return (
        <div className="Introduce_Section" id={"introduce"}>
            <SectionTitle label={"Introduce"} SectionIcon={faHouse}/>
            <main>
                <h1>Hi! I'm Baptiste</h1>
                <h1><span className="color_yellow">Front-End</span> Web Developer </h1>
                <p>I love design and create web site from scratch</p>
            </main>
            <div className={"Introduce_Section__CircleToProjects"}>

            </div>
        </div>
    )
}