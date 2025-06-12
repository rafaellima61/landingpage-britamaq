import "../Header/Header.css";
function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <a href="#">Britamaq</a>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#servicos">Serviços</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>
        <a className="cta-menu" href="#contato">
          Orçamento
        </a>
      </div>
    </header>
  );
}
export default Header;
