import React from "react";

function Navbar(props) {
  return (
    <nav
      className="navbar has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-start">
        <div class="navbar-item">
          <div class="buttons">
            <div class="button is-success">Add Column</div>
            <div class="button is-danger">Remove Column</div>
          </div>
        </div>
      </div>
      <div>
        <div class="navbar-item">
          <div class="buttons">
            <div class="button is-link" onClick={props.fillAll}>
              Fill All
            </div>
            <div class="button is-primary" onClick={props.fillMissing}>
              Fill All Uncolored
            </div>
            <div class="button is-warning" onClick={props.clearAll}>
              Clear All
            </div>
            <select
              className="navbar-item has-dropdown is-hoverable"
              onChange={props.chooseColor}
            >
              <option value="blue">blue</option>
              <option value="white">white</option>
              <option value="red">red</option>
            </select>
          </div>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <div class="button is-success">Add Row</div>
            <div class="button is-danger">Remove Row</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
