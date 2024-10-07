import { useLoaderData, useRouteLoaderData } from 'react-router-dom';
import EventForm from '../components/EventForm.jsx;'

export default function EditEventPage() {
  // const data = useLoaderData(); //error
  const data = useRouteLoaderData('event-detail'); 

  

  return (
    <EventForm event={data.event}/>
  );
}
