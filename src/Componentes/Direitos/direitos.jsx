function Direitos () {
    return (
         <div className="direitos"> 
          <p>
            © {new Date().getFullYear()} Leonardo Personal Trainer. Todos os
            direitos reservados.
          </p>
            <button
        className="btn-falar-personal"
        onClick={() => window.open('https://wa.me/5521969608890', '_blank')}
        >
        Falar com o Personal
      </button>
        </div>
    )
}

export default Direitos