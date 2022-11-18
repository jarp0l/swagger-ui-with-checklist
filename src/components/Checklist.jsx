const Checklist = (props) => {
  const path = props.path;
  const method = props.method;
  const checklistItems = props.items;
  const system = props.system;

  //   console.log(props);
  return (
    <>
      <p>Checklist will be displayed here...</p>
      <button className="btn save-btn" type="submit">
        Save
      </button>
    </>
  );
};

export default Checklist;
