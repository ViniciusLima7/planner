import CreateTripPage from "./pages/create-trip";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage />,
  },
  {
    path: "/teste",
    element: <div>Hello ddd!</div>,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
