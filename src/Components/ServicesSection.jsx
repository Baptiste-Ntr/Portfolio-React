import SectionTitle from "./SectionTitle";
import {faCode, faMagnifyingGlass, faPaintRoller, faTruckFast} from "@fortawesome/free-solid-svg-icons";
import ServicesPart from "./ServicesPart";

export default function ServicesSection() {
    return (
        <div className="Services_Section">
            <SectionTitle label={"Services"} SectionIcon={faTruckFast}/>
            <main>
                <h1>My <span className="color_yellow">Services</span></h1>
                <ServicesPart
                    title={'Web Development'}
                    description={'I will build your own Website from scratch'}
                    sectionIcon={faCode}
                />
                <ServicesPart
                    title={'Web Design'}
                    description={'I will design your website of your dream on Figma '}
                    sectionIcon={faPaintRoller}
                />
                <ServicesPart
                    title={'SEO / Marketing'}
                    description={'I will increase the traffic of your Website'}
                    sectionIcon={faMagnifyingGlass}
                />
            </main>
        </div>
    )
}