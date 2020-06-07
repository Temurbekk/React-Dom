import React, { Component } from "react";
import TableRow from "./TableRow";
import Navbar from "./Navbar";

class Table extends Component {
  constructor() {
    super();
    this.state = {
      rows: 1,
      columns: 1,
      color: "blue",
    };
  }

  chooseColor = (event) => {
    this.setState({ color: event.target.value });
  };

  changeToColor = (event) => {
    event.target.style.backgroundColor = this.state.color;
  };

  render() {
    let tableRows = [];

    for (let i = 0; i < this.state.rows; i++) {
      tableRows.push(
        <TableRow
          numColumns={this.state.columns}
          selectedColor={this.state.color}
          changeToColor={this.changeToColor}
        />
      );
    }

    return (
      <div>
        <Navbar chooseColor={this.chooseColor} />
        <table>{tableRows}</table>
      </div>
    );
  }
}

export default Table;
