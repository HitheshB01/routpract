import { createBrowserRouter } from "react-router-dom";
import Home from './Home';
import About from './About';
import Service from "./Service";
import Navbar from "./Navbar";

const router = createBrowserRouter([
    {
        path:'/',
        element:<><Navbar/><Home/></>,
        errorElement:<div>404 error</div>

    },
    {
        path:'/about',
        element:<><Navbar/><About/></>,
    },
    {
        path:'/service',
        element:<><Navbar/><Service/></>
    }
]);

export default router;
