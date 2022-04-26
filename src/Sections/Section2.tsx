import React from "react";
import { Container } from "../conmponents/Container";
import { H2, H3, P } from "../conmponents/Typography/index.style";
import { Grid } from "@mui/material";
const Section2 = () => {
  return (
    <Container>
      <Grid
        container
        style={{
          gap: "2rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(1fr, 200px))",
        }}
      >
        <Grid item>
          <Grid item>
            <H2>One, Two, Testing!</H2>
            <H3>A Video is Worth a thousand words</H3>
            <P style={{ fontSize: "12px" }}>
              Explaining what you do isn’t always easy. Most internet SaaS and
              E-commerce websites struggle with relaying their value proposition
              effectively - we think outside the box to get your message across
              your audience
            </P>
          </Grid>
          <VideoImg />
        </Grid>
        <Grid item sx={{ display: "grid", gap: "2rem" }}>
          <Grid item>
            <H2>Make a long story short</H2>
            <P style={{ fontSize: "11px", lineHeight: "1.2rem" }}>
              Every company has a unique story to tell. Most try explaining to
              their customers what to do - but even then it gets lost in the
              noise because there’s too much content availableand it’s all the
              same
            </P>
          </Grid>
          <VideoImg />
        </Grid>
        <Grid item>
          <H2 style={{ fontSize: "1.2rem" }}>FIRST THINGS FIRST</H2>
          <P style={{fontSize:"11.6px"}}>
            Recrowdly creates 2d and 3d animations with unique design and copy
            writing. Our services cover the entire gamut needed to get your
            business’s value proposition shared, re- shared, understood and re-
            re- shared
          </P>
        </Grid>
      </Grid>
    </Container>
  );
};

const VideoImg = () => (
  <Grid
    item
    sx={{
      overflowX: "hidden",
      display: "flex",
      position: "relative",
      minHeight: "10.6rem",
      minWidth: "100%",
    }}
  >
    <img src="photos/Placeholder.png" alt="unable" />
  </Grid>
);
export default Section2;
