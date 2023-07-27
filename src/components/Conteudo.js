function Conteudo(){
    const logo = 'https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
    return (
    <div>
        <label className="input-container">
        <img src={logo}></img>
        <br/>
        <img className="icone-esquerda" src="pesquisa.png" ></img>
        <input type="text"></input>
        <img className="icone-direita" src="teclado.png" ></img>
        <img className="icone-direita" src="microfone.png" ></img>
        </label>
        
    </div>
    )
}

export default Conteudo