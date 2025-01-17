import React from "react";
import { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Drawer from "@mui/material/Drawer";
import { IconButton } from "@mui/material";

export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon  className="link"/>
      </IconButton>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className="drawer-div">
          <a href="/">
            <p className="link">Home</p>
          </a>
          <a href="/">
            <p className="link">Comapare</p>
          </a>
          <a href="/">
            <p className="link">Watchlist</p>
          </a>
          <a href="/">
            <p className="link">Dashboard</p>
          </a>
          <a href="/">
            <p className="link"></p>
          </a>
        </div>
      </Drawer>
    </div>
  );
}
