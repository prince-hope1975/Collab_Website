import React from "react";
import styled from "styled-components";

const Pricing = () => {
  return (
    <Container>
      <h2>PRICING</h2>
      <BoxCon>
        {data.map((item, index) => {
          return (
            <Box key={index}>
              <Head>{item.head}</Head>
            </Box>
          );
        })}
      </BoxCon>
    </Container>
  );
};
const BoxCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;
const Container = styled.div``;
const Box = styled.div`
  display: flex;
  border: 1px solid #333;
  min-height: 15rem;
  justify-content: center;
`;
const Head = styled.div`
  position: relative;
  ::before {
    content: " ";
    width: 4rem;
    height: 0.08rem;
    position: absolute;
    background: #333;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  height: fit-content;
  padding-bottom: 10px;
`;

const data = [
  {
    head: "30 SECONDS",
    secondHead: "Commercial video (2D)",
    Price1: "$2000",
    thirdHead: "Commercial video (3D)",
    price2: "$2500",
  },
  {
    head: "60 SECONDS",
    secondHead: "Explainer video with 2D assets on decided color pallet",
    Price1: "$3000",
    thirdHead: "Explainer video with 3D assets on decided color pallet",
    price2: "$3500",
  },
  {
    head: "90 - 120 SECONds",
    secondHead: "Detailed explainer video with detailed assets",
    Price1: "$5000",
  },
];

export default Pricing;
