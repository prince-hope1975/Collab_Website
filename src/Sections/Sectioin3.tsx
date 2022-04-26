import React from "react";
import styled from "styled-components";
import { Branch, Media, Cube } from "../conmponents/Svgs";
import { MobileStepper, Box } from "@mui/material/";
import { useTheme } from "@mui/material/styles";
// @ts-ignore
import SwipeableViews from "react-swipeable-views";
// @ts-ignore
import { autoPlay } from "react-swipeable-views-utils";
import { H2, P } from "../conmponents/Typography/index.style";
import { Grid } from "@mui/material/";
import useMediaQuery from "@mui/material/useMediaQuery";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const Sectioin3 = () => {
  const matches = useMediaQuery("(min-width: 600px)");
  return (
    <section
      style={{
        padding: "0 1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Grid item>
        <H2 style={{ fontSize: "1.2rem" }}>FIRST THINGS FIRST</H2>
        <P style={{ fontSize: "11.6px" }}>
          Recrowdly creates 2d and 3d animations with unique design and copy
          writing. Our services cover the entire gamut needed to get your
          business’s value proposition shared, re- shared, understood and re-
          re- shared
        </P>
      </Grid>
      {!matches ? <SwipeableTextMobileStepper /> : <BidScreenView />}{" "}
    </section>
  );
};
const Container = styled.section`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
`;

const BoxedComponent = styled.div`
  border: 1px solid #484646;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;
const Icon = styled.div`
  max-width: 2rem;
  aspect-ratio: 1;
  padding: 4px;
`;
function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  return (
    <AutoPlaySwipeableViews
      axis={theme.direction === "rtl" ? "x-reverse" : "x"}
      index={activeStep}
      onChangeIndex={handleStepChange}
      enableMouseEvents
    >
      {iconArr.map((step, index) => (
        <div key={step.Heading}>
          {Math.abs(activeStep - index) <= 2 ? (
            <BoxedComponent>
              <Icon>{<step.Icon />}</Icon>
              <H2 style={{ fontSize: "1.3rem" }}>{step.Heading}</H2>
              <P>{step.Desc}</P>
            </BoxedComponent>
          ) : null}
        </div>
      ))}
    </AutoPlaySwipeableViews>
  );
}

const BidScreenView = () => {
  return (
    <Container>
      {iconArr.map((step, index) => (
        <div key={step.Heading}>
          <BoxedComponent>
            <Icon>{<step.Icon />}</Icon>
            <H2 style={{ fontSize: "1.3rem" }}>{step.Heading}</H2>
            <P>{step.Desc}</P>
          </BoxedComponent>
        </div>
      ))}
    </Container>
  );
};

const iconArr = [
  {
    Icon: Branch,
    Heading: "2D ANIMATION",
    Desc: "Go classic with a lively 2D animated video that brings your ideas to life with vivid colors and motion",
  },
  {
    Icon: Cube,
    Heading: "3D ANIMATION",
    Desc: "3D models interract with reality to lend your concept new dimensions",
  },
  {
    Icon: Media,
    Heading: "MIXED MEDIA",
    Desc: "Get the best of both 2D and 3D worlds to really bring the most out of your concept",
  },
];
export default Sectioin3;
