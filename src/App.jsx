import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "./screens/loading";
import Login from "./screens/login";
import Signup from "./screens/signup";
// import Home from "./dashboard/chatlist";
import Navbar from "./dashboard/navbar";
import StatusScreen from "./dashboard/status";
import Chat from "./dashboard/chats";
import "./index.css"

export default function App() {

  const router = createBrowserRouter([
    { path: '/', element: <Login /> },
    { path: '/loading', element: <Loading /> },
    { path: '/signup', element: <Signup /> },
    // { path: '/chatlist', element: <Home /> }, 
    // { path: '/chatscreen', element: <Chat /> }, 
    { path: '/navbar', element: <Navbar /> }, 
    { path: '/status', element: <StatusScreen /> },
    { path: '/chats', element: <Chat /> }
  ]);

  return (
  <>
  <RouterProvider router={router} />
  </>
)}
