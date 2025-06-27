import Header from "./Componentes/Header/header"
import Hero from "./Componentes/Hero/hero"
import Sobre from "./Componentes/Sobre/sobre"
import Servicos from "./Componentes/Servicos/servicos"
import Depoimentos from "./Componentes/Depoimentos/depoimentos"
import Planos from "./Componentes/Planos/planos"
import Contato from "./Componentes/Contatos/contato"
import Footer from "./Componentes/Footer/footer"
import Direitos from "./Componentes/Direitos/direitos"

import "./Componentes/geral.css"
import "./Componentes/Header/header.css"
import "./Componentes/Hero/hero.css"
import "./Componentes/Sobre/sobre.css"
import "./Componentes/Servicos/servicos.css"
import "./Componentes/Depoimentos/depoimentos.css"
import "./Componentes/Planos/planos.css"
import "./Componentes/Footer/footer.css"
import "./Componentes/Direitos/direitos.css"

function App() {
  return (
    <div className='App'>
      <div className="background-fixo"></div>
      <Header/>
      <div className="info">
        <Hero/>
        <Sobre/>
      </div>
      <Servicos/>
      <Depoimentos/>
      <Planos/>
      <Contato/>
      <Footer/>
      <Direitos/>
    </div>
  )
}

export default App