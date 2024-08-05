import Home from "./Pages/Home/Home"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from "./Pages/About Us/About";
import Layout from "./AuthLayout/Layout";
import Service from "./Pages/Our Services/Service";
import Solution from "./Pages/Solutions/Solution";
import Consult from "./Pages/Consult Us/Consult";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/our_service",
        element: <Service />
      },
      {
        path: "/solution?",
        element: <Solution />
      },
      {
        path: "/consult_us?",
        element: <Consult />
      }
      
    ]
  }
])
  
  
  
function App() {

  return(
    <RouterProvider router={router} />
  )
  
}

export default App




