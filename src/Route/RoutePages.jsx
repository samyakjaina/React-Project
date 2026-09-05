 import { Routes, Route } from "react-router-dom";
 import Home from "../pages/Home";
import Health from "../pages/Health";
import About from "../pages/About";
import Login from "../login/login";

 function RoutePages() {  
    return (
        <div>
            <Routes>

            <Route path="/home" element={<Home />} />

            <Route
              path="/health"
              element={<Health />}
            />

            <Route
              path="/about"
              element={<About />}
            />
            <Route path = "/login" element = {<Login />} />  
          </Routes>
        </div>
    );
  }
export default RoutePages;