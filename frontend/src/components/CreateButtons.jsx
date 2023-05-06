import React from "react";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
function CreateButtons() {
  return (
    <div className="Button-container">
      <button className="Blue-button">
        <div>
          <FileUploadOutlinedIcon />
        </div>
        Upload
      </button>

      <button className="White-button">
        <div>
          <AddOutlinedIcon />
        </div>
        Create
      </button>
    </div>
  );
}

export default CreateButtons;
