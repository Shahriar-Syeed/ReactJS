import { useEffect, useState } from 'react';
import Places from './Places.jsx';

const places =localStorage.getItem('places'); //syncronizly

export default  function AvailablePlaces({ onSelectPlace }) {
  // Todo: Fetch available places from backend API and install nmp in backend
    const [availablePlaces, setAvailablePlaces]= useState([]);

    useEffect(()=>{
      
        fetch('http://localhost:3000/places').then((response)=>{
          return response.json();
        })
        .then((resData)=>{
          setAvailablePlaces(resData.places);
        });
    }, []);


  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
