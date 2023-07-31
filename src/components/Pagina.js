import iconeEsquerda from './images/icone_esquerda.png';
import iconeDireitaA from './images/icone_direita_A.png';
import iconeDireitaB from './images/icone_direita_B.png';

function Pagina(){
    const logo = 'https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
    return (
    <div>
        <label className="input-container">
        <img src={logo}></img>
        <br/>
        <span className="icone-esquerda"><img src={iconeEsquerda}  alt="Ícone esquerda" ></img></span>
        
        <input type="text" className='icones-input'></input>
        <span className="icone-direita"><img src={iconeDireitaA} alt="Ícone direita A"></img></span>
        <span className="icone-direita"><img src={iconeDireitaB} alt="Ícone direita B"></img></span>
        
        </label>
        
    </div>
    )
}

export default Pagina;