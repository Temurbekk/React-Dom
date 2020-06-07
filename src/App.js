import React, { Component } from "react";
import Table from "./Components/Table";
import Navbar from "./Components/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Table />
      </div>
    );
  }
}

export default App;
