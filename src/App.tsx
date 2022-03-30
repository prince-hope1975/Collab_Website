import { CssBaseline, Grid,  } from "@mui/material";

import AppBar from "./conmponents/AppBar/";
import Box from "./conmponents/Box";

import { H1, H2, P } from "./conmponents/Typography/index.style";
import { Container } from "./conmponents/Container";
import { Oval } from "./conmponents/Svgs/Svgs.style";
import { Mail, UpRigtArrow } from "./conmponents/Svgs";
function App() {
  return (
    <section
      style={{
        background: "var(--clr-bg)",
        color: "var(--font)",
      }}
    >
      <CssBaseline />

      <AppBar />

      <Container maxWidth="sm" sx={{ minHeight: "100vh" }}>
        <H1 color="white">
          ANIMATED <br /> VIDEOS FOR <br /> YOUR WEBSITE
        </H1>
        <Grid container>
          <Grid
            item
            sx={{ overflow: "hidden", display: "flex", position: "relative" }}
          >
            <img src="/photos/Rectangle 2.png" alt="not showing" />
            <Oval />
          </Grid>
          <Grid item sx={{ paddingTop: 6 }}>
            <H2>Lights, camera, reaction</H2>
            <P>
              We make animated videos for businesses looking to tell a story,
              educate customers, increase revenue. Enter your email address to
              get started
            </P>
            <Box>
              <Mail /> Your email address <UpRigtArrow style={{justifySelf:"flex-end", flexGrow:"1" ,  display:"flex", justifyContent:"flex-end"}}/>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default App;
