import React from "react";

function Navbar(props) {
  return (
    <nav>
      <button>Add Row</button>
      <button>Remove Row</button>
      <button>Add Column</button>
      <button>Remove Column</button>
      <select onChange={props.chooseColor}>
        <option value="blue">blue</option>
        <option value="white">white</option>
        <option value="red">red</option>
      </select>
    </nav>
  );
}

export default Navbar;
