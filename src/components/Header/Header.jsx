import '../Header/Header.css'
function Header() {
    return (
       <header>
        <div className="header-container">
            <div className="logo"><a href="#">Britamaq</a></div>
            <nav className="nav">
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <div className="cta"><a href="#">Orcamento</a></div>
        </div>
       </header>
    );

}
export default Header;