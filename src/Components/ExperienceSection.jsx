import SectionTitle from "./SectionTitle";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";

export default function ExperienceSection() {
    return (
        <div className="Experience_Section" id={"experience"}>
            <SectionTitle label={"Experience"} SectionIcon={faSuitcase} />
            <main>
                <section>
                    <p>09/2023</p>
                    <div>
                        <h1>Web Developer Alternating</h1>
                        <h6 onClick={() => window.location.href = "https://www.monstock.net/"}>Monstock</h6>
                    </div>
                </section>
                <section>
                    <p>09/2023 - 12/2025</p>
                    <div>
                        <h1>Mastere Developper Full Stack</h1>
                        <h6 onClick={() => window.location.href = "https://www.livecampus.fr/formations/mastere-developpeur-web-full-stack"}>LiveCampus</h6>
                    </div>
                </section>
                <section>
                    <p>04/2023 - 06/2023 </p>
                    <div>
                        <h1>Web Developer Internship</h1>
                        <h6 onClick={() => window.location.href = "https://www.un-zero-un.fr/"}>Un Zero Un Agency</h6>
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