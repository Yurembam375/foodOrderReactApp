import { useEffect, useState } from "react";
import MealIeam from "./MealItem";

export default function Meal() {
    const [loadedMeals, setLoadedMeals] = useState([]);

    useEffect(() => {
        async function fetchMeal() {
            const response = await fetch("http://localhost:3000/meals");
            if (response.ok) {

            }
            const meals = await response.json();
            setLoadedMeals(meals);
        }
        fetchMeal();
    }, []);

    return <ul id='meals'>
        {loadedMeals.map((meal) => (
            <MealIeam key={meal.id} meal={meal} />
        ))}
    </ul>;
}