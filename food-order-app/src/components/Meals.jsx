// import { useState, useEffect } from "react";
import useHttp from "../hooks/useHttp.js";
// import { fetchAvailableMeals } from "../http.js";
import MealItem from "./MealItem.jsx";

const requestConfig ={};

export default function Meals() {
  const { data:loadedMeals, isLoading, error} = useHttp('http://localhost:3000/meals/',requestConfig, []);
  console.log(error);
  console.log("loadedMeals", loadedMeals);
  
  // const [loadedMeals, setLoadedMeals] = useState([]);
  // useEffect(() => {
  //   async function fetchMeals() {
  //     try {
  //       const meals = await fetchAvailableMeals();
  //       setLoadedMeals(meals);
  //     } catch {}
  //   }
  //   fetchMeals();
  // }, []);
  if (isLoading){
    return (<p>Fetching meals...</p>);
  }
  if(error){
    return (<p>No meals found...</p>);
  }
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
