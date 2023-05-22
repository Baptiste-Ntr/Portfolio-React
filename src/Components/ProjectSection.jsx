import SectionTitle from "./SectionTitle";
import {faWallet} from "@fortawesome/free-solid-svg-icons";

export default function ProjectSection() {
    return (
        <div className="Project_Section">
            <SectionTitle label={"Projects"} SectionIcon={faWallet}/>
            <main>
                <h1>My <span className="color_yellow">Projects</span></h1>
                <div className='row1'>
                    <section>
                        <footer>
                            <h1 className="big_title">Project 1</h1>
                            <div className="project_techno_container">
                                <div className="project_techno">React</div>
                                <div className="project_techno">Next</div>
                            </div>
                        </footer>
                    </section>
                </div>
                <div className='row2'>
                    <section>
                        <footer>
                            <h1 className="medium_title">Project 2</h1>
                            <div className="project_techno_container">
                                <div className="project_techno">React</div>
                                <div className="project_techno">Next</div>
                            </div>
                        </footer>
                    </section>
                    <section>
                        <footer>
                            <h1 className="little_title">Project 3</h1>
                        </footer>
                    </section>
                </div>
                <div className='row3'>
                    <section>
                        <footer>
                            <h1 className="little_title">Project 4</h1>
                        </footer>
                    </section>
                    <section>
                        <footer>
                            <h1 className="medium_title">Project 5</h1>
                            <div className="project_techno_container">
                                <div className="project_techno">React</div>
                                <div className="project_techno">Next</div>
                            </div>
                        </footer>
                    </section>
                </div>
            </main>
        </div>
    )
}