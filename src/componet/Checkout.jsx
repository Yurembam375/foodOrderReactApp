import { useContext } from "react";
import CartContext from "../store/CartContex";
import Modal from "../Ui/Model";
import { currencyFormater } from "../util/formatter";
import Input from "../Ui/Input";
import Button from "../Ui/Button";
import UserProgessContext from "../store/UserProgessContex";
export default function Checkout() {
    const cartCtx = useContext(CartContext);
    const userProgessCtx = useContext(UserProgessContext);
    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );
    function handleClose() {
        userProgessCtx.hideCheckout();
    }

    return <Modal open={userProgessCtx.progress === 'checkout'}>
        <form>
            <h2>Checkout</h2>
            <p>Total Amount:{currencyFormater.format(cartTotal)}</p>
            <Input label="Full-Name" type='text' id='full-name' />
            <Input label="E-Mail Address" type='email' id='email' />
            <Input label="Street" type='text' id='street' />
            <div className="control-row">
                <Input label="Postal Code" type='text' id='Postal Code' />
                <Input label="City" type='text' id='City' />
            </div>
            <p className="modal-actions"><Button textOnly onClick={handleClose}>Close</Button>
                <Button >Submit Order</Button>
            </p>
        </form>
    </Modal>
}