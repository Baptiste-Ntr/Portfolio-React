import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAddressBook,
    faHouse,
    faMicrochip,
    faSuitcase,
    faTruckFast,
    faUser,
    faWallet
} from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";

export default function SideBar() {

    const scrollIntoSection = (sectionId) => {
        if (sectionId === 'contact') {
            toast('The contact section is not available yet', {
                icon: '⚒️',
                style: {
                    fontFamily: 'Poppins'
                }
            })
        } else {
            const section = document.getElementById(sectionId);
            section.scrollIntoView({behavior: "smooth", block: 'center', inline: 'center'});
        }

    }

    return (
        <div className="SideBar">
            <ul>
                <li onClick={() => scrollIntoSection('introduce')}>
                    <FontAwesomeIcon className="sidebar_icon" icon={faHouse} size={"xl"} />
                </li>
                <li onClick={() => scrollIntoSection('about')}>
                    <FontAwesomeIcon className="sidebar_icon" icon={faUser} size={"xl"} />
                </li>
                <li onClick={() => scrollIntoSection('experience')}>
                    <FontAwesomeIcon className="sidebar_icon" icon={faSuitcase} size={"xl"} />
                </li>
                <li onClick={() => scrollIntoSection('services')}>
                    <FontAwesomeIcon className="sidebar_icon" icon={faTruckFast} size={"xl"} />
                </li>
                <li onClick={() => scrollIntoSection('skills')}>
                    <FontAwesomeIcon className="sidebar_icon" icon={faMicrochip} size={"xl"} />
                </li>
                <li onClick={() => scrollIntoSection('projects')}>
                    <FontAwesomeIcon className="sidebar_icon" icon={faWallet} size={"xl"} />
                </li>
                <li onClick={() => scrollIntoSection('contact')}>
                    <FontAwesomeIcon className="sidebar_icon" icon={faAddressBook} size={"xl"} />
                </li>
            </ul>
        </div>
    )
}