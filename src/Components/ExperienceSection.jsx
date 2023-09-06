import SectionTitle from "./SectionTitle";
import {faSuitcase} from "@fortawesome/free-solid-svg-icons";

export default function ExperienceSection() {
    return (
        <div className="Experience_Section" id={"experience"}>
            <SectionTitle label={"Experience"} SectionIcon={faSuitcase}/>
            <main>
                <section>
                    <p>04/2023 - 06/2023 </p>
                    <div>
                        <h1>Web Developer Internship</h1>
                        <h6>Un Zero Un Agency</h6>
                    </div>
                </section>
                <section>
                    <p>2022-2023 </p>
                    <div>
                        <h1>CRRW Porfessional Licence</h1>
                        <h6>Engineering school EISINe</h6>
                    </div>
                </section>
                <section>
                    <p>2020 - 2022 </p>
                    <div>
                        <h1>SIO BTS</h1>
                        <h6>General and Technological High School Gaspard Monge</h6>
                    </div>
                </section>
            </main>
        </div>
    )
}