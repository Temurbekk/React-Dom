import React from "react";

function Navbar(props) {
  // <nav
  //   class="navbar has-shadow"
  //   role="navigation"
  //   aria-label="main navigation"
  // >
  //   <div class="navbar-brand">
  //     <a
  //       role="button"
  //       class="navbar-burger burger"
  //       aria-label="menu"
  //       aria-expanded="false"
  //       data-target="navbarBasicExample"
  //     >
  //       <span aria-hidden="true"></span>
  //       <span aria-hidden="true"></span>
  //       <span aria-hidden="true"></span>
  //     </a>
  //   </div>
  //   <div class="navbar-start">
  //     <div class="navbar-item">
  //       <div class="buttons">
  //         <div class="button is-success" onClick="addColumn()">
  //           Add Column
  //         </div>
  //         <div class="button is-danger" onClick="removeColumn()">
  //           Remove Column
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  //   <div>
  //     <div class="navbar-item">
  //       <div class="buttons">
  //         <div class="button is-link" onclick="fillAll()">
  //           Fill All
  //         </div>
  //         <div class="button is-primary" onclick="fillAllUncolored()">
  //           Fill All Uncolored
  //         </div>
  //         <div class="button is-warning" onClick="clearAll()">
  //           Clear All
  //         </div>
  //         <div class="navbar-item has-dropdown is-hoverable">
  //           <a class="navbar-link">
  //             Colors
  //           </a>
  //           <div class="navbar-dropdown">
  //             <a onClick="pickBlue()" class="navbar-item" id="blue">Blue</a>
  //             <a onClick="pickRed()" class="navbar-item" id="red">Red</a>
  //             <a onClick="pickWhite()" class="navbar-item" id="white"
  //               >White</a
  //             >
  //           </div>
  //         </div>
  //         <div class="navbar-item" id ="colorPicker">
  //           Color Selected: White
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  //   <div class="navbar-end">
  //     <div class="navbar-item">
  //       <div class="buttons">
  //         <div class="button is-success" onClick="addRow()">Add Row</div>
  //         <div class="button is-danger" onClick="removeRow()">
  //           Remove Row
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </nav>
  return (
    <nav
      className="navbar has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="nav-brand">
        <button>Add Row</button>
        <button>Remove Row</button>
        <button>Add Column</button>
        <button>Remove Column</button>
        <select onChange={props.chooseColor}>
          <option value="blue">blue</option>
          <option value="white">white</option>
          <option value="red">red</option>
        </select>
      </div>
    </nav>
  );
}

export default Navbar;
