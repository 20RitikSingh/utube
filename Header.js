import React from "react";
import "./header.css";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function Header() {
  return (
    <div className="header">

      <div className="header_left">
        <MenuOutlinedIcon />
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png?20220605194644"
          alt="logo"
        />
      </div>

      <div className="header_mid">
        <input type="text" placeholder="search" />
        <SearchOutlinedIcon />
      </div>

      <div className="header_right">
        <VideoCallOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <AccountCircleOutlinedIcon />
      </div>
    </div>
  );
}

export default Header;
