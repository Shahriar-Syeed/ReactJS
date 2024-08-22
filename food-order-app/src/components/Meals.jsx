// import { useState, useEffect } from "react";
import useHttp from "../hooks/useHttp.js";
// import { fetchAvailableMeals } from "../http.js";
import MealItem from "./MealItem.jsx";
import Error from "./Error.jsx";

const requestConfig ={};

export default function Meals() {
  const { data:loadedMeals, isLoading, error} = useHttp('http://local host:3000/meals/',requestConfig, []);
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
    return (<p className="center">Fetching meals...</p>);
  }
  if(error){
    return (<Error title="Failed to fetch meal" message={error} />);
  }
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
