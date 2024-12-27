import { currencyFormater } from "../util/formatter";
export default function CartItem({ name, price, qnty, onIncrease, onDecrease }) {
    return (
        <li className="cart-item">
            <p>{name}- {qnty} x {currencyFormater.format(price)}</p>
            <p className="cart-item-actions">
                <button onClick={onDecrease}>-</button>
                <span>{qnty}</span>
                <button onClick={onIncrease}>+</button>
            </p>
        </li>
    )
}