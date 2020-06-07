import React from "react";

function TableColumn(props) {
  return (
    <td
      onMouseDown={props.mouseDown}
      onmouseUp={props.mouseUp}
      onMouseEnter={props.mouseEnter}
      onClick={props.changeToColor}
    >
      O
    </td>
  );
}

export default TableColumn;
