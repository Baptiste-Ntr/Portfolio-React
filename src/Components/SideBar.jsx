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

export default function SideBar() {

    return (
        <>
            <div className="SideBar">
                <ul>
                    <li><FontAwesomeIcon className="sidebar_icon" icon={faHouse} size={"xl"} /></li>
                    <li><FontAwesomeIcon className="sidebar_icon" icon={faUser} size={"xl"} /></li>
                    <li><FontAwesomeIcon className="sidebar_icon" icon={faSuitcase} size={"xl"} /></li>
                    <li><FontAwesomeIcon className="sidebar_icon" icon={faTruckFast} size={"xl"} /></li>
                    <li><FontAwesomeIcon className="sidebar_icon" icon={faMicrochip} size={"xl"} /></li>
                    <li><FontAwesomeIcon className="sidebar_icon" icon={faWallet} size={"xl"} /></li>
                    <li><FontAwesomeIcon className="sidebar_icon" icon={faAddressBook} size={"xl"} /></li>
                </ul>
            </div>
        </>
    )
}