import React from "react";

function TableColumn(props) {
  return (
    <td
      onMouseDown={props.mouseDown}
      onmouseUp={props.mouseUp}
      onMouseEnter={props.mouseEnter}
      onClick={props.changeToColor}
    >
      <div
        style={{ width: "35px", height: "25px", border: "1.5px solid black" }}
      ></div>
    </td>
  );
}

export default TableColumn;
