import React from "react";
import uuid from "react-uuid";
import "./Checklist.css";

// import OperationExtRow from "./operation-extension-row";
import OperationExt from "./operation-extensions";
import Operation from "./operation";
import ChecklistY from "./Checklist";

// React.useEffect = () => {
//   const checkedItems = document.querySelectorAll(".checked");

//   for (let item of checkedItems) {
//     if (item.classList.contains("checked")) {
//       item.checked = true;
//       item.classList.add("hellow");
//       // console.log(document.querySelectorAll(".checked"))
//     } else {
//       item.checked = false;
//       item.classList.add("bye");
//     }
//   }

//   console.log(document.querySelectorAll(".checked")[0].classList);
// };

const ChecklistItem = ({ item, completed }) => {
  const handleCheckboxChange = (e) => {
    e.preventDefault();
    let checkboxChecked = e.target.checked;
    // checkboxChecked = checkboxChecked ? false : true;
    // if (!checkboxChecked) {
    //   checkboxChecked = false;
    // } else {
    //   checkboxChecked = true;
    // }

    console.log(e);
  };

  return (
    <tr key={uuid()}>
      <td>{item}</td>
      <td>
        <input
          className={`checkbox ${completed ? "checked" : ""}`}
          type="checkbox"
          onChange={handleCheckboxChange}
          value={item}
          key={uuid()}
        />
        {/* {completed ? (
          <input
            // className={"checkbox " + completed ? "checked" : ""}
            className=""
            type="checkbox"
            onChange={handleCheckboxChange}
            value={item}
            key={uuid()}
            checked
          />
        ) : (
          <input
            // className={"checkbox " + completed ? "checked" : ""}
            type="checkbox"
            onChange={handleCheckboxChange}
            value={item}
            key={uuid()}
          /> */}
        {/* )} */}
      </td>
    </tr>
  );
};

const renderChecklist = (xChecklist, { React }) => {
  if (xChecklist.Length === 0) {
    return <></>;
  }

  let tBody = [];
  for (let el of xChecklist) {
    tBody.push(ChecklistItem(el));
  }
  return tBody;
};

const handleSave = (e) => {
  const tBody = e.target.closest("tbody");
  let tRows = Array.from(tBody.childNodes);
  tRows.pop();

  let xChecklist = [];

  for (let tRow of tRows) {
    let checklistItem = {};
    checklistItem.item = tRow.childNodes[0].innerText;
    checklistItem.completed = tRow.childNodes[1].childNodes[0].checked;
    xChecklist.push(checklistItem);
  }

  const operationRow = tBody.closest(".opblock");
  const method = operationRow
    .querySelector(".opblock-summary-method")
    .innerText.toLocaleLowerCase();
  const path = operationRow.querySelector(".opblock-summary-path").innerText;
  const tag = tBody
    .closest(".opblock-tag-section")
    .querySelector("h3 > a > span").innerText;

  /*
    POST 'payload' to an endpoint
    the endpoint parses this payload and 
    appends to the appropriate places in json
  */
  const payload = {
    [path]: {
      [method]: {
        tags: [tag],
        "x-checklist": xChecklist,
      },
    },
  };
  console.log(payload);
};

const Checklist =
  (Original, { React }) =>
  (props) => {
    const { xKey, xVal } = props;

    if (xKey === "x-checklist") {
      const xChecklist = !xVal ? null : xVal.toJS ? xVal.toJS() : xVal;

      return renderChecklist(xChecklist, { React });
    } else {
      return <Original {...props} />;
    }
  };

function ChecklistPlugin() {
  return {
    components: {
      // OperationExtRow: OperationExtRow,
      OperationExt: OperationExt,
      operation: Operation,
      // Checklist: Checklist,
    },
    wrapComponents: {
      OperationExtRow: Checklist,
    },
  };
}

export default ChecklistPlugin;
