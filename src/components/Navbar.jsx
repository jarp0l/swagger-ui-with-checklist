const style = {
  list: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-evenly",
  },
};

function Navbar() {
  return (
    <div className="navbar">
      <ul style={style.list}>
        <li>Home</li>
        <li>Summary</li>
      </ul>
    </div>
  );
}

export default Navbar;
