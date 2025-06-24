import imagemLeo2 from "../imagems/leo2.jpg";

function Sobre() {
  return (
    <section id="sobre" className="sobre">
      <img src={imagemLeo2} alt="" />

      <div className="sobre-leo">
        <h3>
          Quem é o <span>Leonardo</span> ?
        </h3>

       

          <div  className="p-1">
            <p>
              Leonardo é um personal trainer com mais de 5 anos de experiência,
              especializado em treinos personalizados, emagrecimento saudável e
              ganho de massa muscular.
            </p>
            <p>
              Com uma abordagem focada em resultados e
              qualidade de vida, ele transforma objetivos em conquistas reais,
              ajudando seus alunos a alcançarem o melhor desempenho físico e
              bem-estar.
            </p>
            <p>
               Ele é Coach Body Building pós-graduado, Personal Trainer de
              Alta Performance e Profissional de Educação Física, combinando
              formação técnica com prática para oferecer treinos eficazes e seguros.
            </p>
            <p>
              Leonardo acredita que o sucesso no treino vem da dedicação, disciplina
              e um planejamento feito sob medida para cada pessoa. Se você busca
              transformação corporal, saúde e qualidade de vida, Leonardo é o
              profissional ideal para te acompanhar nessa jornada.
            </p>
          </div>

        

        <p className="p-2">
          Ao longo dos anos, Leonardo já ajudou dezenas de pessoas a alcançarem{" "}
          <br />
          uma vida mais saudável e ativa com treinos feitos sob medida e <br />
          acompanhamento constante.
        </p>
      </div>
    </section>
  );
}

export default Sobre;
