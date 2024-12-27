import { useContext } from "react";
import Button from "../Ui/Button";
import { currencyFormater } from "../util/formatter";
import CartContext from "../store/CartContex";

export default function MealIeam({ meal }) {
    const cartCtX = useContext(CartContext);
    function handleAddMealCart() {
        cartCtX.addItem(meal);
    }
    return (
        <li className="meal-item">
            <article>
                <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-iteam-price">{currencyFormater.format(meal.price)}</p>
                    <p className="meal-iteam-description">{meal.description}</p>
                </div>
                <p className="meal-iteam-action">
                    <Button onClick={handleAddMealCart}>Add to Cart</Button>
                </p>
            </article>

        </li>
    )
}