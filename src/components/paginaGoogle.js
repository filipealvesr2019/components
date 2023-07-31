import iconeEsquerda from './images/icone_esquerda.png';
import iconeDireitaA from './images/icone_direita_A';
import iconeDireitaB from './images/icone_direita_B';
function paginaGoogle(){
    const logo = 'https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
    return (
    <div>
        <label className="input-container">
        <img src={logo}></img>
        <br/>
        <span className="icone-esquerda"><img src={iconeEsquerda}></img></span>
        
        <input type="text"></input>
        <span className="icone-direita-A"><img src={iconeDireitaA}></img></span>
        <span className="icone-direita-B"><img src={iconeDireitaB}></img></span>
        
        </label>
        
    </div>
    )
}

export default paginaGoogle;