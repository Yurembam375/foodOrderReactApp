import { useContext } from "react";
import Modal from "../Ui/Model";
import { currencyFormater } from "../util/formatter";
import Button from "../Ui/Button";
import CartContext from "../store/CartContex";
import UserProgessContext from "../store/UserProgessContex";
import CartItem from "./CartItem";

export default function Cart() {


    const cartCtx = useContext(CartContext);
    const userProgessCtx = useContext(UserProgessContext);

    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );
    function handleCloseCart() {
        userProgessCtx.hideCart();
    }
    function handleGotoCheckout() {
        userProgessCtx.showCheckout();
    }

    return <Modal className="cart"
        open={userProgessCtx.progress === 'cart'}
        onClose={userProgessCtx.progress === 'cart' ? handleCloseCart : null}>
        <h2>Your Cart</h2>
        <ul>
            {cartCtx.items.map((item) => (
                <CartItem key={item.id}
                    name={item.name}
                    qnty={item.quantity}
                    price={item.price}
                    onIncrease={() => cartCtx.addItem(item)}
                    onDecrease={() => cartCtx.removeItem(item.id)}

                />
            ))}
        </ul>
        <p className="cart-total">{currencyFormater.format(cartTotal)}</p>
        <p className="modal-actions">
            <Button textOnly onClick={handleCloseCart} >Close</Button>
            {cartCtx.items.length > 0 && (
                <Button onClick={handleGotoCheckout}>Go to Checkout</Button>
            )

            }

        </p>
    </Modal>
}