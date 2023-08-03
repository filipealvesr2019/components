import escudo from './images/escudo.png';
function Escudo(){
    return (
        <div className="container-escudo">
            <span><img src={escudo} alt='icone do escudo'></img></span>
            <p>Faça o Check-up de privacidade</p>
            

        </div>    
    )
}

export default Escudo;