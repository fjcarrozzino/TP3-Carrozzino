

export const NavBar = () => {
    return (
        <div className="navbar">
            <header className="header-navbar">
                <a href="./">
                    <span> Logo y Marca</span>
                </a>
            </header>
            <nav className="nav-navbar">
                <ul className="ul-navbar">
                    <li><a href="/">Pagina 1</a></li>
                    <li><a href="/">Pagina 2</a></li>
                    <li><a href="/">Pagina 3</a></li>
                </ul>
            </nav>
        </div>
    )
}