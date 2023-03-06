import * as React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { List, MenuItem } from "@mui/material";
import { useState } from "react";

export function LIdashboard() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <Link to={"/"}>
        <Button onClick={handleClick}>Dashboard</Button>
      </Link>
      {isOpen && (
        <List>
          <MenuItem>
            <Link to={"/productlist"}>Product list</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/addproduct"}>Add product</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/product/category/list"}>Category list</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/product/category/add"}>Add category</Link>
          </MenuItem>
        </List>
      )}
    </div>
  );
}
