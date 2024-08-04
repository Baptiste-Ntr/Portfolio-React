import { FaGithub } from "react-icons/fa";

export default function ProfilCard() {
    return (
        <div className="Profil_Card">
            <header>
                <aside>
                    <h1 className="color_yellow">Baptiste</h1>
                    <h1>Nautré</h1>
                </aside>
                <aside>
                    <h1>Web</h1>
                    <h1 className="color_yellow">Developeur</h1>
                </aside>
            </header>
            <main>
                {/* PP IMG */}
            </main>
            <section>
                <h2>baptiste.nautre@hotmail.fr</h2>
                <p>© <span>Baptiste.</span> All Rights Reserved</p>
            </section>
            <ul>
                <li onClick={() => window.location.href = 'https://github.com/Baptiste-Ntr'}><FaGithub size={30} /></li>
            </ul>
            <footer>
                <button>Contact <span>me</span> !</button>
            </footer>
        </div>
    );
}