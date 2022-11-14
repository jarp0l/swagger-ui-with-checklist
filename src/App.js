import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div>
        <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" />
      </div>
    </div>
  );
}

export default App;
