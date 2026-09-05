import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Health from "./pages/Health";
import About from "./pages/About";
import Login from "./login/login";


function App() {
  return (
    <BrowserRouter>
      <div >
        {/* <Login /> */}

        {/* <main className="content"> */}

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

        {/* </main> */}

      </div>

    </BrowserRouter>
  );
}

export default App;