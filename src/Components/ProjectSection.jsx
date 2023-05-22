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
                            <h1>Project 1</h1>

                        </footer>
                    </section>
                </div>
                <div className='row2'>
                    <section>
                        <footer></footer>
                    </section>
                    <section>
                        <footer></footer>
                    </section>
                </div>
                <div className='row3'>
                    <section>
                        <footer></footer>
                    </section>
                    <section>
                        <footer></footer>
                    </section>
                </div>
            </main>
        </div>
    )
}