import React, { Component } from "react";
import TableRow from "./TableRow";

class Table extends Component {
  constructor() {
    super();
    this.state = {
      rows: 1,
      columns: 1,
      color: "blue",
    };
  }

  render() {
    let tableRows = [];

    for (let i = 0; i < this.state.rows; i++) {
      tableRows.push(
        <TableRow
          numColumns={this.state.columns}
          selectedColor={this.state.color}
        />
      );
    }

    return (
      <div>
        <Navbar />
        <table>{tableRows}</table>
      </div>
    );
  }
}

export default Table;
