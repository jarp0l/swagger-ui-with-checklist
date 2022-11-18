import React from "react";

export const OperationExt = ({
  path,
  method,
  extensions,
  getComponent,
  getConfigs,
}) => {
  let OperationExtRow = getComponent("OperationExtRow");
  return (
    <div className="opblock-section">
      <div className="opblock-section-header">
        <h4>Checklist</h4>
      </div>
      <div className="table-container">
        {extensions.entrySeq().map(([k, v]) => (
          <OperationExtRow path={path} method={method} key={`${k}-${v}`} xKey={k} xVal={v} />
        ))}
      </div>
    </div>
  );
};

export default OperationExt;
