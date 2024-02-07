import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home!</div>
  },
  {
    path: "/test",
    element: <div>Test!</div>
  },

]);


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
