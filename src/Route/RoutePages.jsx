import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Health from "../pages/Health";
import About from "../pages/About";
import Login from "../user/login";
import ErrorPage from "../error/ErrorPage";
import AppLayout from "../pages/HomePage/AppLayout";
import ProtectedRoute from "../auth/ProtectedRoute.jsx";
function RoutePages() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />

       <Route element={<ProtectedRoute />}>
        <Route path="/" element={<AppLayout />} >
         <Route index element={<Home />} />
          <Route
            path="health"
            element={<Health />}
          />

          <Route
            path="about"
            element={<About />}
          />
        </Route>
        </Route>
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
export default RoutePages;