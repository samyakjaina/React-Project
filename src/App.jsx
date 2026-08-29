import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Health from "./pages/Health";
import About from "./pages/About";


function App() {
  return (
    <BrowserRouter>

      <div className="app">

        <Sidebar />

        <main className="content">

          <Routes>

            <Route path="/" element={<Home />} />

            <Route
              path="/health"
              element={<Health />}
            />

            <Route
              path="/about"
              element={<About />}
            />

          </Routes>

        </main>

      </div>

    </BrowserRouter>
  );
}

export default App;