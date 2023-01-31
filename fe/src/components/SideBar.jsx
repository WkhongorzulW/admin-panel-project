import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import {
  LIdashboard,
  LIdoc,
  LIEcommerce,
  LIprofile,
  LIuser,
} from "../lists/Lists";

const texts = [
  <LIprofile />,
  <LIdashboard />,
  <LIEcommerce />,
  <LIuser />,
  <LIdoc />,
];

const icons = [
  <AccountCircleIcon />,
  <HomeIcon />,
  <ShoppingCartIcon />,
  <PersonIcon />,
  <DescriptionIcon />,
];

const drawerWidth = 240;
export default function SideBar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {texts.map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>{icons[index]}</ListItemIcon>
                {text}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
}
