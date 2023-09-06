import SectionTitle from "./SectionTitle";
import {faUser} from "@fortawesome/free-solid-svg-icons";

export default function AboutSection() {
    return (
        <div className="About_Section" id={'about'}>
            <SectionTitle label={"About"} SectionIcon={faUser}/>
            <main>
                <h1> My <span className="color_yellow">Story</span></h1>
                <p>
                    I started web development as an autodidact
                    more than 5 years ago,
                    then I continued my studies, learned more
                    and more things until today
                    when I decided to launch my account as a
                    self-contractor to allow you to have a presence
                    on the Internet and to spread your business, your expertise.
                </p>
            </main>
        </div>
    )
}