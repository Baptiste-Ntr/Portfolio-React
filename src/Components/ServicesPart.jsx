import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function ServicesPart({title, description, sectionIcon}) {
    return (
        <section>
            <h1>{title}</h1>
            <p>{description}</p>
            <FontAwesomeIcon className="section_icon" icon={sectionIcon} size={"2x"} color={"#F5CB5C"}/>
        </section>
    )
}