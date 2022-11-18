import React from "react";

export const OperationExtRow = ({ xKey, xVal }) => {
  const xNormalizedValue = !xVal ? null : xVal.toJS ? xVal.toJS() : xVal;

  return (
    <div>
      <div>{xKey}</div>
      <div>{JSON.stringify(xNormalizedValue)}</div>
    </div>
  );
};

export default OperationExtRow;
