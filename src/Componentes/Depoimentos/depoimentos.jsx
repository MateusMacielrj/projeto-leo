import ImagemAntesDepois from "../imagems/antesedepois.png";

function Depoimentos() {
  return (
    <section id="depoimentos" className="depoimentos">
      <h3>Depoimentos</h3>

      <div className="alunos">
        <div className="depoimento">
          <img src={ImagemAntesDepois} alt="" />
          <blockquote>
            "Excelente profissional, sempre atento às minhas necessidades.
            Recomendo demais!"
          </blockquote>
          <p>
            <strong>- Carlos Souza</strong>
          </p>
        </div>

        <div className="depoimento">
          <img src={ImagemAntesDepois} alt="" />
          <blockquote>
            "Os treinos personalizados fizeram toda a diferença no meu
            rendimento. Estou muito satisfeita!"
          </blockquote>
          <p>
            <strong>- Maria Oliveira</strong>
          </p>
        </div>

        <div className="depoimento">
          <img src={ImagemAntesDepois} alt="" />
          <blockquote>
            "Excelente profissional, sempre atento às minhas necessidades.
            Recomendo demais!"
          </blockquote>
          <p>
            <strong>- Carlos Souza</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Depoimentos;
