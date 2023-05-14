import ProfilCard from "./Components/ProfilCard";

import './SCSS/index.scss'
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import SectionsContainer from "./Components/SectionsContainer";

export default function App() {
    return (
        <>
            <Header />
            <ProfilCard />
            <SideBar />
            <SectionsContainer/>
        </>
    );
}