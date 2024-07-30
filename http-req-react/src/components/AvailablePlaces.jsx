import { useEffect, useState } from 'react';
import Places from './Places.jsx';

const places =localStorage.getItem('places'); //syncronizly

export default  function AvailablePlaces({ onSelectPlace }) {
  // Todo: Fetch available places from backend API and install nmp in backend
    const [isFetching, setIsFetching] = useState(true);
    const [availablePlaces, setAvailablePlaces]= useState([]);

    useEffect(()=>{
      async function fetchingPlaces(){
        setIsFetching(true);
        const response = await fetch('http://localhost:3000/places');
        const resData = await response.json();
        setAvailablePlaces(resData.places);
        setIsFetching(false);
      }
      fetchingPlaces();
    }, []);


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
