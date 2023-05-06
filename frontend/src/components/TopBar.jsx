import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
function TopBar() {
  return (
    <div className="Topbar">
      <div className="Search-bar">
        <input
          className="Search-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="Search-button" type="submit">
          <SearchOutlinedIcon />
        </button>
      </div>

      <div className="Sort">
        Sort by
        <div>
          <KeyboardArrowDownOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
