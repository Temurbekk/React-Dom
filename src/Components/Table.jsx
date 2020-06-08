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
      coloring: false,
    };
  }

  chooseColor = (event) => {
    this.setState({ color: event.target.value });
  };

  changeToColor = (event) => {
    event.target.style.backgroundColor = this.state.color;
  };

  mouseDown = (event) => {
    this.setState({ coloring: true });
  };

  mouseUp = (event) => {
    this.setState({ coloring: false });
  };

  mouseEnter = (event) => {
    if (this.state.coloring === true) {
      event.target.style.backgroundColor = this.state.color;
    }
  };

  render() {
    let tableRows = [];

    for (let i = 0; i < this.state.rows; i++) {
      tableRows.push(
        <TableRow
          mouseDown={this.mouseDown}
          mouseUp={this.mouseUp}
          mouseEnter={this.mouseEnter}
          numColumns={this.state.columns}
          selectedColor={this.state.color}
          changeToColor={this.changeToColor}
        />
      );
    }

    return (
      <div className="container">
        <Navbar chooseColor={this.chooseColor} />
        <section className="hero box">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-centered">
                <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                  <table className="container section">{tableRows}</table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Table;
