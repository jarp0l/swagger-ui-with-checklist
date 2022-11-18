import uuid from "react-uuid";
import "./Checklist.css";

const ChecklistItem = ({ item, status }) => {
  return (
    <tr key={uuid()}>
      <td>{item}</td>
      <td>
        <input
          className={"checkbox " + status ? "checked" : ""}
          type="checkbox"
        />
      </td>
    </tr>
  );
};

const renderChecklist = (checklist, { React }) => {
  if (checklist.Length === 0) {
    return <></>;
  }

  let tBody = [];
  for (let el of checklist) {
    tBody.push(ChecklistItem(el));
  }
  return tBody;
};

const OperationExtChecklistPlugin = ({ React }) => {

  const handleSave = (e) => {
    console.log(e);
  };

  return {
    wrapComponents: {
      OperationExtRow:
        (Original, { React }) =>
        (props) => {
          const { xKey, xVal } = props;
          if (xKey === "x-checklist") {
            const checklist = !xVal ? null : xVal.toJS ? xVal.toJS() : xVal;
            for (let item of checklist) {
              item.key = uuid();
            }

            return [
              renderChecklist(checklist, { React }),
              <tr key={uuid()}>
                <td colSpan="2">
                  <button className="btn save-btn" onClick={handleSave}>
                    Save
                  </button>
                </td>
                <td></td>
              </tr>,
            ];
          } else {
            return <Original {...props} />;
          }
        },
    },
  };
};

export default OperationExtChecklistPlugin;
