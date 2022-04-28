import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import {
  Wrapper,
  MenuWrapper,
  List,
  BookingContainer,
} from "./DrawerComponents.styles";

import { Xclose } from "../Svgs";
const DrawerList = () => {
  return (
    <Wrapper>
      <MenuWrapper>
        Menu <Xclose />
      </MenuWrapper>
      <List>
        {["Home", "Portfolio", "Pricing", "Review"].map((text, index) => (
          <ListItem button key={text} sx={{ paddingLeft: 0 }}>
            <a href={`#${text}`}>
              <ListItemText primary={text} />
            </a>
          </ListItem>
        ))}
        <BookingContainer>Book a meeting</BookingContainer>
      </List>
    </Wrapper>
  );
};

export default DrawerList;
