import './NavBar.css';
import {LogoCart} from '../cartWidget/CartWidget.js'

export const NavigationBar = () =>{
    return(
        <header className="navbar">
        <p className="logo">Laca Beauty (Proximo E-commerce)</p>
          <nav>
            <ul className="links">
                <li className="link"> <a href="#">Home</a></li>
                <li className="link"> <a href="#">Productos</a></li>
                <li className="link"> <a href="#">Nosotros</a></li>
                <li className="link"> <a href="#">Contacto</a></li>
            </ul>
            </nav>
            <LogoCart /> 
        </header>
);};

