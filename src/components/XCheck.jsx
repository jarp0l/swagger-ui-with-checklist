const XCheck = (system) => {
  return {
    wrapComponents: {
      OperationExtRow:
        (Original, { React }) =>
        (props) => {
            // console.log(props);
          const { xKey, xVal } = props;
          //   console.log(xKey)
          if (xKey === "x-checklist") {
            console.log("Check");
          }
        },
    },
  };
};

export default XCheck;
