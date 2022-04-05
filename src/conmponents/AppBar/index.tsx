import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// Styled components

import AppBar from "./AppBar.styles";
import Toolbar from "../Toolbar/Toolbar.style";
import { BlockIcon, HamburgerIcon } from "../Svgs";
import TemporaryDrawer from "../Drawer";

// other imports
import { useGlobalContext } from "../../Context";
export default function ButtonAppBar() {
  const {setOpen, isOpen} = useGlobalContext()
  return (
    <Box sx={{ flexGrow: 1 ,maxWidth:"100%"}}>
      <AppBar position="absolute">
        <Toolbar>
          <Button color="inherit" style={{ display: "flex", gap: "4px" ,margin:0, padding:0}}>
            <BlockIcon /> Blockly
          </Button>

          <IconButton
            onClick={() => {
              setOpen(!isOpen);
              console.log("change");
            }}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ }}
          >
            <HamburgerIcon />
            <TemporaryDrawer />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
