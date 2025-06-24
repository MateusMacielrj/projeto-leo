import imagemLeo2 from "../imagems/leo2.jpg";

function Sobre() {
  return (

    <section id="sobre" className="sobre">

      <img src={imagemLeo2} alt="" />

      <div className="sobre-leo">

        <h3>Quem é o <span>Leonardo</span> ?</h3>

        <p className="p-1">
          Leonardo é um personal trainer com mais de 5 anos de experiência,<br />
          especializado em treinos personalizados, emagrecimento saudável e <br />
          ganho de massa muscular. Com uma abordagem focada em resultados e <br />
          qualidade de vida, ele transforma objetivos em conquistas reais.
        </p>

        <p className="p-2">
          Ao longo dos anos, Leonardo já ajudou dezenas de pessoas a alcançarem <br />
          uma vida mais saudável e ativa com treinos feitos sob medida e <br />
          acompanhamento constante.
        </p>

      </div>
    </section>
  );
}

export default Sobre;
