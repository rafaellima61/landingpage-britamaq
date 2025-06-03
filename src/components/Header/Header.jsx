import '../Header/Header.css'
function Header() {
    return (
       <header>
        <div className="header-container">
            <div className="logo"><a href="#">Britamaq</a></div>
            <nav className="nav">
                <ul>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Serviços</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
            <a className='cta-menu' href="#">Orçamento</a>
        </div>
       </header>
    );

}
export default Header;