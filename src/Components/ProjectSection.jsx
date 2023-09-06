import SectionTitle from "./SectionTitle";
import {faWallet} from "@fortawesome/free-solid-svg-icons";
import {ProjectItem} from "./ProjectItem";

export default function ProjectSection() {
    return (
        <div className="Project_Section" id={'projects'}>
            <SectionTitle label={"Projects"} SectionIcon={faWallet}/>
            <main>
                <h1>My <span className="color_yellow">Projects</span></h1>
                <div className='row1'>
                    <ProjectItem ProjectName={'Spotify Clone'}
                                 ProjectTechno={['React', 'Next', 'TailWind', 'SupaBase']}
                                 ProjectURL={'https://spotify-clone-ten-lilac.vercel.app'}
                                 titleSize={'big_title'}
                                 ProjectImg={'/img/spotify.png'}
                    />
                </div>
                <div className='row2'>
                    <ProjectItem ProjectName={'Weather App'} ProjectTechno={['React', 'API']} ProjectURL={'https://meteo-three.vercel.app'} titleSize={'medium_title'} />
                    {/*<section>*/}
                    {/*    <footer>*/}
                    {/*        <h1 className="little_title">Project 3</h1>*/}
                    {/*    </footer>*/}
                    {/*</section>*/}
                </div>
                <div className='row3'>
                    {/*<section>*/}
                    {/*    <footer>*/}
                    {/*        <h1 className="little_title">Project 4</h1>*/}
                    {/*    </footer>*/}
                    {/*</section>*/}
                    {/*<section>*/}
                    {/*    <footer>*/}
                    {/*        <h1 className="medium_title">Project 5</h1>*/}
                    {/*        <div className="project_techno_container">*/}
                    {/*            <div className="project_techno">React</div>*/}
                    {/*            <div className="project_techno">Next</div>*/}
                    {/*        </div>*/}
                    {/*    </footer>*/}
                    {/*</section>*/}
                </div>
            </main>
        </div>
    )
}