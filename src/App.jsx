import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "./screens/loading";
import Login from "./screens/login";
import Signup from "./screens/signup";
import Dashboard from "./screens/dashboard";
import "./index.css"

export default function App() {

  const router = createBrowserRouter([
    { path: '/', element: <Loading /> },
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <Signup /> },
    { path: '/dashboard', element: <Dashboard /> }, 
  ]);

  return <RouterProvider router={router} />
}
