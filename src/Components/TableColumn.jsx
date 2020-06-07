import React from "react";

function TableColumn(props) {
  return <td onClick={props.changeToColor}>|___|</td>;
}

export default TableColumn;
