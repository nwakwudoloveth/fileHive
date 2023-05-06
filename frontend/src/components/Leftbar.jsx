import React from "react";
import "../App.css";
import { Directory } from "./Directory";
import CreateButtons from "./CreateButtons";
import filehive from "../assets/filehive.svg";

function Leftbar() {
  return (
    <div className="Leftbar">
      <img src={filehive} className="App-logo" alt="logo" />
      <CreateButtons />
      <ul className="DirectoryList">
        {Directory.map((val, key) => {
          return (
            <li
              className="row"
              id={window.location.pathname == val.link ? "active" : ""}
              key={key}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Leftbar;
