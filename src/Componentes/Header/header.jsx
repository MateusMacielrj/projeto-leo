import LogoLeo from "../imagems/logo-2.png"

function Header() {
  return (
    <header>
      <img src={LogoLeo} alt="Logo da academia Leo" />

      <nav aria-label="Menu principal">
        <ul>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#depoimentos">Depoimentos</a></li>
          <li><a href="#planos">Planos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;