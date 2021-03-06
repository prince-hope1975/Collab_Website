import { CssBaseline } from "@mui/material";

import AppBar from "./conmponents/AppBar/";
import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Sectioin3";
import Pricing from "./Sections/Pricing";
import Portfolio from "./Sections/Portfolio";
import Review from "./Sections/Review"
function App() {
  return (
    <section
      style={{
        background: "var(--clr-bg)",
        color: "var(--font)",
        display: "flex",
        flexDirection: "column",
        gap: "6rem",
      }}
    >
      <CssBaseline />
      <AppBar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Pricing />
      <Portfolio />
      <Review />
    </section>
  );
}

export default App;
