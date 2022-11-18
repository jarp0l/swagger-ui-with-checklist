import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

import OperationExt from "../components/operation-extensions";
import Operation from "../components/operation";
import ChecklistExt from "../components/ChecklistExt";

function MyChecklistPlugin() {
  return {
    components: {
      OperationExt: OperationExt,
      operation: Operation,
    },
    wrapComponents: {
      OperationExtRow: ChecklistExt,
    },
  };
}

function Home() {
  return (
    <div>
      {/* <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" /> */}
      <SwaggerUI
        url="/data/swagger-lite.json"
        plugins={[MyChecklistPlugin]}
        showExtensions={true}
        displayRequestDuration={true}
        // configs={{
        //   checklistConfig: { postFormUrl: "" },
        // }}
      />
    </div>
  );
}

export default Home;
