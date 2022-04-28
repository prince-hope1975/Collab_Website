import React from "react";
import styled from "styled-components";
import { LargeRightArr } from "../conmponents/Svgs";
const Portfolio = (props: any) => {
  return (
    <Container id="Portfolio" {...props}>
      <H2>PORTFOLIO</H2>

      <PortfolioSection>
        {Data.map((item) => {
          return (
            <div>
              <a href="#">{item.Text}</a>{" "}
              <LargeRightArr />
            </div>
          );
        })}
      </PortfolioSection>
    </Container>
  );
};

const Container = styled.section`
  padding: 1.3rem;
`;
const H2 = styled.h2`
  font-weight: 200;
`;
const PortfolioSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
div{
    display: flex;
    align-items: center;
    gap: 3rem;
}
  a {
      flex:1;
    color: white;
    text-decoration: solid;
    font-size: 2.5rem;
    text-transform: uppercase;
    
    :hover {
      text-decoration: underline;
    }
  }
`;

const Data = [
  {
    Text: "Dressed To thrill",
  },
  {
    Text: "software on cloud 9",
  },
  {
    Text: "straight from the drawing board",
  },
];
export default Portfolio;
