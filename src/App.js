import React from "react";
import FrontPage from "./pages/FrontPage";
import ResultsPage from "./pages/ResultsPage";

import "./css/App.css";

const App = () => {
  return (
    <div className="app" style={{ backgroundImage: `url(${"/assets/images/space.jpg"})`}}>
      {/* <img src={"/assets/images/eclipse.jpg"} /> */}
      {/* <FrontPage /> */}
      <ResultsPage />
    </div>
  );
}

export default App;
