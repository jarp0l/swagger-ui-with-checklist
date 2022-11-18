import { Formik, Field, Form } from "formik";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const Checklist = (props) => {
  const path = props.path;
  const method = props.method;
  const checklistItems = props.items;
  const system = props.system;

  const [checklistState, setChecklistState] =
    system.React.useState(checklistItems);

  //   console.log(checklistState);

  const handleSubmit = function (e) {
    e.preventDefault();

    const postUrl = "https://httpbin.org/post";

    const payload = {
      [path]: {
        [method]: {
          "x-checklist": checklistItems,
        },
      },
    };

    const options = {
      method: "POST",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };

    (async () => {
      const response = await fetch(postUrl, options);
      if (response.status >= 200 && response.status <= 204) {
        let data = await response.json();
        console.log(data);
      } else {
        console.error(`Error!: ${response.status}`);
      }
    })();
  };

  const checkedItems = [];
  for (let el of checklistItems) {
    if (el.completed) {
      checkedItems.push(el.item);
    }
  }

//   const handleSave = (e) => {
//     e.target.value = "Saved";
//     sleep(5000);
//     e.target.value = "Save";
//   };

  return (
    <Formik
      initialValues={{
        checked: checkedItems,
      }}
      onSubmit={async (values) => {
        await sleep(500);
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
        <Form>
          <div id="checkbox-group">Checklist</div>
          <div role="group" aria-labelledby="checkbox-group">
            {checklistItems.map((checklistItem) => {
              return (
                <label key={method + path + checklistItem.item}>
                  <Field
                    type="checkbox"
                    name="checked"
                    value={checklistItem.item}
                  />
                  {checklistItem.item}
                </label>
              );
            })}
          </div>

          <button className="btn save-btn" type="submit" onClick={handleSave}>
            Save
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Checklist;
