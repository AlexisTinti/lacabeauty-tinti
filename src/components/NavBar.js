import '../App.css';

const NavigationBar = () =>{
    return(
      <div className="App">
        <header className="topbar">
        <p className="logo">Laca Beauty (Proximo E-commerce)</p>
          <nav>
            <ul className="links">
                <li className="link"> <a href="#">Home</a></li>
                <li className="link"> <a href="#">Productos</a></li>
                <li className="link"> <a href="#">Nosotros</a></li>
                <li className="link"> <a href="#">Contacto</a></li>
            </ul>
            </nav> 
        </header>
      </div>
);};

export default NavigationBar;