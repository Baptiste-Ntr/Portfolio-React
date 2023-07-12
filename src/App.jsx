import ProfilCard from "./Components/ProfilCard";

import './SCSS/index.scss'
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import SectionsContainer from "./Components/SectionsContainer";
import toast, {Toaster} from "react-hot-toast";
import {useEffect} from "react";

export default function App() {

    useEffect(() => {
        toast.error('This website is not responsive yet, please use a computer to see it correctly', {
            style: {
                fontFamily: 'Poppins'
            }
        })
        toast('This website is not finished yet, some features are not available', {
            icon: '⚒️',
            style: {
                fontFamily: 'Poppins'
            }
        })
    }, [])

    return (
        <>
            <Toaster/>
            <Header />
            <ProfilCard />
            <SideBar />
            <SectionsContainer/>
        </>
    );
}