const checklist = ["IDOR", "CORS", "xyz"];

const checklistItem = ({ item }) => {
  return (
    <div className="checklist-item" key={item}>
      <input
        className="checkbox"
        type="checkbox"
        name="checklist-item"
        style={{
          marginRight: "3px",
        }}
      />
      <span className="markdown">{item}</span>
    </div>
  );
};

function ChecklistY(props) {
  // const operationProps = props.operation;
  // const opPath = operationProps.get("path");
  // const opMethod = operationProps.get("method");
  // const operation = props.specSelectors.operationWithMeta(opPath, opMethod);
  // const isWip = operation.get("x-wip") || false;
  // const checklist = operation.get("description") || false;

  // console.log(isWip);
  // console.log(props);
  // console.log(props);

  const handleEdit = (e) => {
    if (e.target.textContent === "Edit") {
      e.target.textContent = "Save";
    } else {
      e.target.textContent = "Edit";
    }
  };

  return (
    <div className="checklist-wrapper">
      {console.log("Inside checklist wrapper...")}

      <div className="opblock-section-header">
        <div className="tab-header">
          <h4 className="opblock-title">Checklist</h4>
        </div>
        <button className="btn" onClick={handleEdit}>
          Edit
        </button>
      </div>
      <div className="opblock-description-wrapper">
        {/* <form>{checklist.map((item) => checklistItem({ item }))}</form> */}
      </div>
    </div>
  );
}

export default ChecklistY;
