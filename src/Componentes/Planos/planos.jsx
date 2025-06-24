function Planos() {
  return (
    <section id="planos" className="valores">
      <h3>Escolha seu Plano</h3>

      <div className="planos">

        <div className="plano-1">

          <h4>Plano Mensal</h4>
          <p>R$ 120,00</p>
          <ul>
            <li>Treinos personalizados</li>
            <li>Acompanhamento semanal</li>
          </ul>
          
        </div>

        <div className="plano-2">
          <h4>Plano Trimestral</h4>
          <p>R$ 330,00</p>
          <ul>
            <li>Desconto especial</li>
            <li>Consultoria por vídeo</li>
          </ul>
        </div>

        <div className="plano-3">
          <h4>Plano VIP</h4>
          <p>R$ 500,00</p>
          <ul>
            <li>Treinos diários + Dieta</li>
            <li>Suporte direto com o Leo</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Planos;
