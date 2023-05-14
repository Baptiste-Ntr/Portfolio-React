import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function SectionTitle({SectionIcon, label}) {
    return (
        <div className="Section_Title">
            <FontAwesomeIcon className="Section_Title__Icon" icon={SectionIcon} size={"1x"}/>
            <h1>{label}</h1>
        </div>
    );
}