import { useContext } from 'react';
import logoImg from '../assets/logo.jpg'
import Button from '../Ui/Button';
import CartContext from '../store/CartContex';
import UserProgessContext, { UserProgessContextProvider } from '../store/UserProgessContex';

export default function Header() {
    const cartCtX = useContext(CartContext);
    const userProgessCtx = useContext(UserProgessContext);

    const totalCartItems = cartCtX.items.reduce((totalNumberOfItem, item) => {
        return totalNumberOfItem + item.quantity;

    }, 0);

    function handleShowCart() {
        userProgessCtx.showCart();
    }

    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImg} />
                <h1>Tommy Food</h1>
            </div>
            <nav>
                <Button textOnly onClick={handleShowCart}>Cart ({totalCartItems})
                </Button>
            </nav>
        </header>
    );
}