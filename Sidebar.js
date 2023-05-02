import React from "react";
import "./sidebar.css";
import SidebarElement from "./SidebarElement";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
function sidebar() {
  return (
    <div>
      <SidebarElement title="Home" Icon={<HomeOutlinedIcon />} />
      <SidebarElement title="Trending" Icon={<WhatshotOutlinedIcon />} />
      <SidebarElement
        title="Subscription"
        Icon={<SubscriptionsOutlinedIcon />}
      />
      <hr />
      <SidebarElement title="Library" Icon={<VideoLibraryOutlinedIcon />} />
      <SidebarElement title="Music" Icon={<MusicNoteOutlinedIcon />} />
    </div>
  );
}

export default sidebar;
