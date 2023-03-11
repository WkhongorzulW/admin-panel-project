import * as React from "react";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { List } from "@mui/material";
import { useState } from "react";

export function LIuser() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <Link to={"/"}>
        <Button onClick={handleClick}>User</Button>
      </Link>
      {isOpen && (
        <List>
          <Link to={"/user/list"}>
            <ListItemText primary={"User list"} />
          </Link>
          <Link to={"/user/add"}>
            <ListItemText primary={"Add user"} />
          </Link>
          <Link to={"/user/role/list"}>
            <ListItemText primary="User role list" />
          </Link>
          <Link to={"/user/role/add"}>
            <ListItemText primary="Add user role" />
          </Link>
          <Link to={"/user/login"}>
            <ListItemText primary="Login" />
          </Link>
        </List>
      )}
    </div>
  );
}
