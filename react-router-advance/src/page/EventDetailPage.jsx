import { json, useLoaderData } from "react-router-dom"
import EventItem from "../components/EventItem";

export default function EventDetailPage() {
  // const params =useParams();
  const data = useLoaderData();
  console.log(data);


  return (
    <> 
    {/* <h1>EventDetailPage</h1>
    <p>Event ID: {params.eventId}</p> */}
    <EventItem event={data.event}/>
    </>
  );
}

export async function loaderEventDetails({request, params}){
  const id = params.eventId;
  console.log('http://localhost:8080/events/' + id);
  const response = await fetch('http://localhost:8080/events/' + id);
  if(!response.ok){
    throw json({message: 'Could not fetch details for selected event.'}, {status: 500});
  }else{
    return response;
  }
}