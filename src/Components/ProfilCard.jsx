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
                <h2>contact@baptiste-ntr.fr</h2>
                <p>© <span>Baptiste.</span> All Rights Reserved</p>
            </section>
            <ul>
                <li>Insta</li>
                <li>Twitter</li>
                <li>Github</li>
            </ul>
            <footer>
                <button>Contact <span>me</span> !</button>
            </footer>
        </div>
    );
}