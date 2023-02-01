import * as React from "react";
import {
  Box,
  Drawer,
  Toolbar,
  List,
  Divider,
  ListItemText,
} from "@mui/material";
import { ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import { LIdoc, LIEcommerce, LIprofile } from "../lists/Lists";
import { LIdashboard } from "../lists/LIdashboard";
import { LIuser } from "../lists/LIuser";

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
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
}
