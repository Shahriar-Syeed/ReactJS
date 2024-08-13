import { useState, useEffect } from "react";
import { fetchAvailableMeals } from "../http.js";
import MealItem from "./MealItem.jsx";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);
  useEffect(() => {
    async function fetchMeals() {
      try {
        const meals = await fetchAvailableMeals();
        setLoadedMeals(meals);
      } catch {}
    }
    fetchMeals();
  }, []);
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
