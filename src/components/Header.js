
import menu from './images/menu.png';
import perfil from './images/foto.png';

function Header(){
    return (
        <div className="header">
            <h1>Gmail</h1>
            <h2>Imagens</h2>
            <img src={menu}></img>
            <img src={perfil}></img>
        </div>
    )
}



export default Header;