import { useState } from "react";
import ImagemAntesDepois from "../imagems/antesedepois.png";

function Depoimentos() {
  const [imagemModal, setImagemModal] = useState(null);

  const abrirModal = (src) => {
    setImagemModal(src);
  };

  const fecharModal = () => {
    setImagemModal(null);
  };

  return (
    <section id="depoimentos" className="depoimentos">
      <h3>Depoimentos</h3>

      <div className="alunos">
        {[1, 2, 3].map((_, i) => (
          <div className="depoimento" key={i}>
            <img
              src={ImagemAntesDepois}
              alt="Antes e depois"
              onClick={() => abrirModal(ImagemAntesDepois)}
              style={{ cursor: "pointer" }}
            />
            <blockquote>
              "Excelente profissional, sempre atento às minhas necessidades.
              Recomendo demais!"
            </blockquote>
            <p>
              <strong>- Carlos Souza</strong>
            </p>
          </div>
        ))}
      </div>

      {imagemModal && (
        <div className="modal" onClick={fecharModal}>
          <div className="modal-conteudo" onClick={(e) => e.stopPropagation()}>
            <img src={imagemModal} alt="Imagem ampliada" />
            <button className="fechar" onClick={fecharModal}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Depoimentos;
