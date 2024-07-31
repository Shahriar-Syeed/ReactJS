export async function fetchAvailablePlaces(){
    const response = await fetch('http://localhost:3000/places');
    const resData = await response.json();

    if(!response.ok){ //true 200, 300, false 400, 500 status code
      // const error = new Error('Failed to fetch places');
      // throw error;
      throw new Error('Failed to fetch places');
    }

    return resData.places;

}