import RodapeLogo from "../imagems/logo-2.png"
import ImagemInsta from "../imagems/icon-instagram.png"
import ImagemFace from "../imagems/icon-face.png"
import ImagemWhathsap from '../imagems/whatsap-icon.png'

function Footer() {
  return (
    <footer className="footer">

      <img className="img-rodape" src={RodapeLogo} alt="" />


      <div className="msg-logo">
        
        <p>
          Superação não é mágica, é repetição. É levantar quando ninguém está olhando, é insistir quando o corpo diz não. 
          É ter metas que assustam, mas continuar mesmo assim. Cada treino é um passo além do que você achava ser possível. 
          Aqui, você não constrói só músculos — constrói caráter, força e confiança. O impossível se torna hábito. E você, 
          imbatível.
        </p>
      </div>

      <div id="contato" className="contatos">
        
       
        
      </div>

      <div className="redes-sociais">
        <a
          href="https://www.instagram.com/leomacosta/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ImagemInsta} alt="" />
        </a>

        <a
          href="https://www.facebook.com/share/16RFhwNtYe/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
        >
         <img src={ImagemFace} alt="" />
        </a>

        <a
          href="https://wa.me/5521969608890"
          target="_blank"
          rel="noopener noreferrer"
        >
         <img src={ImagemWhathsap} alt="" />
        </a>

       
      </div>
       
     
      
    </footer>

    
  );
}

export default Footer;
