import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import {sortPlacesByDistance} from '../loc.js';

import { fetchAvailablePlaces } from '../http.js';

const places =localStorage.getItem('places'); //syncronizly

export default  function AvailablePlaces({ onSelectPlace }) {
  // Todo: Fetch available places from backend API and install nmp in backend
    const [isFetching, setIsFetching] = useState(true);
    const [availablePlaces, setAvailablePlaces]= useState([]);
    const [error, setError]= useState();

    useEffect(()=>{
      async function fetchingPlaces(){
        setIsFetching(true);

        try{

          // const response = await fetch('http://localhost:3000/places');
          // const resData = await response.json();
  
          // if(!response.ok){ //true 200, 300, false 400, 500 status code
          //   // const error = new Error('Failed to fetch places');
          //   // throw error;
          //   throw new Error('Failed to fetch places');
          // }
          const places = await fetchAvailablePlaces();

          navigator.geolocation.getCurrentPosition((position)=>{

            // const sortedPlaces = sortPlacesByDistance(resData.places, position.coords.latitude, position.coords.longitude);
            const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude);

            setAvailablePlaces(sortedPlaces);
            setIsFetching(false);
          });

        }catch(error){
          setError({message: error.message || 'could not fetch places, please try again later.'});
          setIsFetching(false);
        }

      }
      fetchingPlaces();
    }, []);
    if(error){
      return <Error title='An error occurred!' message={error.message}/>
    }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
