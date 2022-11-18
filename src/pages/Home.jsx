import { useEffect } from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

import ChecklistPlugin from "../components/ChecklistPlugin";

function Home() {
  return (
    <div>
      {/* <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" /> */}
      <SwaggerUI
        url="/data/swagger-lite.json"
        plugins={[ChecklistPlugin]}
        deepLinking={true}
        showExtensions={true}
        showCommonExtensions={true}
      />
    </div>
  );
}

export default Home;
