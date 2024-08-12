import logoImage from '../assets/logo.jpg';
import Cart from './Cart.jsx';

export default function Header () {
    return(
        <header id='main-header'>
            <div id="title">
                <img src={logoImage} alt="Food order logo" />
                <h1>REACTFOOD</h1>
            </div>
            <Cart/>

        </header>
    );
}