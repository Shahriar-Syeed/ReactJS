import {
  Await,
  defer,
  json,
  redirect,
  useLoaderData,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

export default function EventDetailPage() {
  // const params =useParams();
  // const data = useLoaderData();//error
  // const data = useRouteLoaderData('event-detail');
  const { event, events } = useRouteLoaderData("event-detail");
  console.log(event, events);

  return (
    <>
      {/* <h1>EventDetailPage</h1>
    <p>Event ID: {params.eventId}</p> */}
      {/* <EventItem event={data.event}/> */}
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading . . .</p>}>
        <Await resolve={event}>
          {(loadEvent) => <EventItem event={loadEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading . . .</p>}>
        <Await resolve={events}>
          {(loadEvents) => <EventsList events={loadEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export async function loadEvent(id) {
  console.log("http://localhost:8080/events/" + id);
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
}

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

export async function loaderEventDetails({ request, params }) {
  const id = params.eventId;
  // console.log('http://localhost:8080/events/' + id);
  // const response = await fetch('http://localhost:8080/events/' + id);
  // if(!response.ok){
  //   throw json({message: 'Could not fetch details for selected event.'}, {status: 500});
  // }else{
  //   return response;
  // }
  return defer({
    event: await loadEvent(id),
    events: loadEvents(),
  });
}

export async function action({ params, request }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });
  if (!response.ok) {
    throw json({ message: "Could delete event." }, { status: 500 });
  } else {
    return redirect("/events");
  }
}
