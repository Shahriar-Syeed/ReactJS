// import EventsList from '../components/EventsList';
import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList.jsx";

function EventsPage() {
  const events = useLoaderData();

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function loaderEvent() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // .....
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
