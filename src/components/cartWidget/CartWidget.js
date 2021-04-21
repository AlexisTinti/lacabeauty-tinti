import '../navbar/NavBar.css'
import cart from './cart.png';

export const LogoCart = () =>{
    return (
        <div className='cart-logo'>
            <img src={cart}/>

        </div>
    )
}