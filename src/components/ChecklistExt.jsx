import Checklist from "./Checklist";

const ChecklistExt = (Original, system) => (props) => {
  const { path, method, xKey, xVal } = props;

  if (xKey === "x-checklist") {
    const xChecklist = !xVal ? null : xVal.toJS ? xVal.toJS() : xVal;

    return (
      <Checklist
        path={path}
        method={method}
        items={xChecklist}
        system={system}
      />
    );
  } else {
    return <Original {...props} />;
  }
};

export default ChecklistExt;
