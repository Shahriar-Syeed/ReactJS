// Challenge / Exercise

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./page/HomePage.jsx";
import EventsPage, { loaderEvent as eventsLoader } from "./page/EventsPage.jsx";
import EventDetailPage, {
  loaderEventDetails as eventDetailLoader,
} from "./page/EventDetailPage.jsx";
import NewEventPage from "./page/NewEventPage.jsx";
import EditEventPage from "./page/EditEventPage.jsx";
import RootLayout from "./page/Root.jsx";
import EventsRoot from "./page/EventsRoot.jsx";
import ErrorPage from "./page/ErrorPage.jsx";
// import { loaderEvent } from "./page/loaderEvent.jsx";

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// end
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "events",
          element: <EventsRoot />,
          children: [
            {
              index: true,
              element: <EventsPage />,
              loader: eventsLoader,
            },
            {
              path: ":eventId",
              id: 'event-detail',
              loader: eventDetailLoader,
              children: [
                { index: true, element: <EventDetailPage /> },
                { path: "new", element: <NewEventPage /> },
              ],
            },
            { path: ":eventId/edit", element: <EditEventPage /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
