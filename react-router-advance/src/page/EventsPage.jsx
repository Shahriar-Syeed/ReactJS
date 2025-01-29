// import EventsList from '../components/EventsList';
import { Await, defer, json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList.jsx";
import { Suspense } from "react";

function EventsPage() {
  // const data = useLoaderData();

  const { events } = useLoaderData();
  console.log("events" , events);
  // if(data.isError){
  //   return <p>{data.message}</p>;
  // }

  // const events = data.events;

  // return (
  //   <>
  //     <EventsList events={events} />
  //   </>
  // );

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading . . .</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

export async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events."}
    // throw {message: 'Could not fetch events.'};
    // throw new Response(JSON.stringify({ message: "could not fetch events." }), {
    //   status: 500,
    // });
    throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    const resData = await response.json();
    // const res = new Response("any data", { status: 201 });
    // return resData;
    console.log(response, resData);
    return resData.events;
  }
}
export function loaderEvent() {
  return defer({
    events: loadEvents(),
  });
}
