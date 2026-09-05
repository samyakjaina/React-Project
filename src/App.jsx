import { BrowserRouter } from "react-router-dom";

import RoutePages from "./Route/RoutePages.jsx";


function App() {
  return (
    <BrowserRouter>
      <div >
        {/* <Login /> */}

        {/* <main className="content"> */}

        <RoutePages/>

        {/* </main> */}

      </div>

    </BrowserRouter>
  );
}

export default App;