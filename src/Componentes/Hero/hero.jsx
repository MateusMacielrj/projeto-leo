import imagemLeo from "../imagems/leo.jpg";



function Hero() {
  return (
    <section className="hero">
      <div className="texto">
         <h2>Força, foco e <span>resultado</span> com o  Personal<span> Leonardo</span></h2>

          <p>Alcance seus objetivos com treinos personalizados, acompanhamento dedicado e resultados reais. Sua jornada para um corpo mais forte, saudável e confiante começa aqui. Vamos juntos nessa transformação!</p>
      </div>

      <img src={imagemLeo} alt="" />
      
    </section>
  );
}

export default Hero;
