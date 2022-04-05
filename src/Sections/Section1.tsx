import React from 'react'
import Box from "../conmponents/Box";
import {  Grid } from "@mui/material";


import { H1, H2, P } from "../conmponents/Typography/index.style";
import { Container } from "../conmponents/Container";
import { Oval } from "../conmponents/Svgs/Svgs.style";
import {
  Mail,
  UpRigtArrow,
  Google,
  Microsoft,
  Uber,
  Airbnb,
  Wired,
  Stripe,
} from "../conmponents/Svgs";
import Input from "../conmponents/input";

const Section1 = () => {
  return (
    <Container maxWidth="sm">
      <H1 color="white">
        ANIMATED <br /> VIDEOS FOR <br /> YOUR WEBSITE
      </H1>
      <Grid container>
        <Grid
          item
          sx={{
            overflow: "hidden",
            display: "flex",
            position: "relative",
            minHeight: "8.6rem",
            minWidth: "100%",
          }}
        >
          <img src="/photos/Rectangle 2.png" alt="not showing" />
          <Oval />
        </Grid>
        <Grid item sx={{ paddingTop: 6 }}>
          <H2>Lights, camera, reaction</H2>
          <P>
            We make animated videos for businesses looking to tell a story,
            educate customers, increase revenue. Enter your email address to get
            started
          </P>
          <Box sx={{ mt: "1.4rem" }}>
            <Mail /> <Input placeholder="Your email address" />{" "}
            <UpRigtArrow
              style={{
                justifySelf: "flex-end",
                // flexGrow: "1",
                display: "flex",
                justifyContent: "flex-end",
              }}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          width: "95%",
          columnGap: "8%",
          rowGap: "1rem",
          justifyContent: "center",
          mt: "2.8rem",
        }}
      >
        <Grid item>
          <Google />
        </Grid>
        <Grid item>
          <Microsoft></Microsoft>
        </Grid>
        <Grid item>
          <Uber />
        </Grid>
        <Grid item>
          <Airbnb />
        </Grid>
        <Grid item>
          <Wired></Wired>
        </Grid>
        <Grid item>
          <Stripe></Stripe>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Section1