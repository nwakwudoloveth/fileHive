import React from "react";
import "../App.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HomeIcon from "@mui/icons-material/Home";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import GetAppOutlinedIcon from "@mui/icons-material/GetAppOutlined";
export const Directory = [
  { title: "Home", icon: <HomeIcon />, link: "/Home" },
  { title: "Recent", icon: <AccessTimeIcon />, link: "/Recent" },

  { title: "Downloads", icon: <GetAppOutlinedIcon />, link: "/Downloads" },
  { title: "Trash", icon: <DeleteOutlineIcon />, link: "/Bin" },
];
