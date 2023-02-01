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
    console.log("clicked");
  }
  return (
    <div>
      <Button onClick={handleClick}>User</Button>
      {isOpen && (
        <List>
          <Link to={"/userlist"}>
            <ListItemText primary={"User list"} />
          </Link>
          <Link to={"/adduser"}>
            <ListItemText primary={"Add user"} />
          </Link>
        </List>
      )}
    </div>
  );
}
