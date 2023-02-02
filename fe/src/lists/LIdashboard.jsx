import * as React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { List, MenuItem } from "@mui/material";
import { useState } from "react";

export function LIdashboard() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
    console.log("clicked");
  }
  return (
    <div>
      <Button onClick={handleClick}>Dashboard</Button>
      {isOpen && (
        <List>
          <MenuItem>
            <Link to={"/productlist"}>Product list</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/addproduct"}>Add product</Link>
          </MenuItem>
        </List>
      )}
    </div>
  );
}
